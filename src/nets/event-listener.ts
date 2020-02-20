import { unmarshalTx } from '@irisnet/amino-js';
import { base64ToBytes, bytesToBase64 } from '@tendermint/belt';
import Utils from '../utils/utils';
import SdkError from '../errors';
import { Client } from '../client';
import * as is from 'is_js';
import * as types from '../types';
import * as EventEmitter from 'events';
import { obj as Pumpify } from 'pumpify';
import * as Ndjson from 'ndjson';
import * as Websocket from 'websocket-stream';
import { strict } from 'assert';

/**
 * IRISHub Event Listener
 */
export class EventListener {
  /** @hidden */
  private url: string;
  private ws: any;
  private em: EventEmitter;

  constructor(url: string) {
    this.url = url;
    this.em = new EventEmitter();
  }

  /**
   * Initialize ws client
   */
  connect(): void {
    this.ws = Pumpify(Ndjson.stringify(), Websocket(this.url + '/websocket'));
    this.ws.on('data', (resp: string) => {
      const data = JSON.parse(resp);
      if (!data.id) {
        this.em.emit('error', 'Unexpected response: ' + JSON.stringify(data));
      }
      // Route the data to the specified subscriber based on the request ID
      this.em.emit(data.id, data.error, data.result);
    });
    this.ws.on('error', (err: string) => {
      this.em.emit('error', err);
    });
  }

  /**
   * Disconnect from server
   */
  disconnect(): void {
    // Unsubscribe all from server
    this.ws.write({
      jsonrpc: '2.0',
      method: 'unsubscribe_all',
      id: 'unsubscribe_all',
    });

    this.em.on('unsubscribe_all#event', (error, data) => {
      console.log(error);
      console.log(data);

      // Destroy ws instance
      this.ws.destroy();
      // Remove all listeners
      this.em.removeAllListeners();
    });
  }

  /**
   * Listen on error
   * @param callback Callback function with a [[SdkError]] param
   */
  onError(callback: (error: SdkError) => void): void {
    this.em.on('error', (err: string) => {
      callback(new SdkError(err));
    });
  }

  unscribe(event: EventSubscription): void {
    // Unsubscribe all from server
    this.ws.write({
      jsonrpc: '2.0',
      method: 'unsubscribe',
      id: 'unsubscribe#' + event.id,
      params: {
        query: event.query,
      },
    });

    this.em.on('unsubscribe#' + event.id, (error, data) => {
      console.log(error);
      console.log(data);
      // Remove listeners
      this.em.removeAllListeners(event.id + '#event');
      this.em.removeAllListeners('unsubscribe#' + event.id + '#event');
    });
  }

  /**
   * Subscribe NewBlock
   * @param callback A function to receive notifications
   * @returns
   */
  subscribeNewBlock(
    callback: (error?: SdkError, block?: types.EventDataNewBlock) => void
  ): EventSubscription {
    // Build and send subscription
    const eventType = 'NewBlock';
    const id = eventType + Math.random().toString(16);
    const query = new EventQueryBuilder()
      .addCondition(Event.Type, eventType)
      .build();

    console.log(JSON.stringify(query));
    this.ws.write({
      jsonrpc: '2.0',
      method: 'subscribe',
      id: id,
      params: {
        query: query,
      },
    });

    // Listen for new blocks, decode and callback
    this.em.on(id + '#event', (error, data) => {
      if (error) {
        callback(
          new SdkError(error.message, error.code, error.data),
          undefined
        );
      }

      if (!data || !data.data || !data.data.value) {
        return;
      }

      const blockData = data.data.value;

      // Decode txs
      console.log(blockData.data);
      if (blockData.block && blockData.block.data && blockData.block.data.txs) {
        const txs: string[] = blockData.block.data.txs;
        const decodedTxs = new Array<types.Tx<types.StdTx>>();
        txs.forEach(msg => {
          decodedTxs.push(
            unmarshalTx(base64ToBytes(msg)) as types.Tx<types.StdTx>
          );
        });
        blockData.block.data.txs = decodedTxs;
        console.log(JSON.stringify(decodedTxs));
      }

      const eventBlock = blockData as types.EventDataNewBlock;
      callback(undefined, eventBlock);
    });

    // Return an EventSubscription instance, so client could use to unsubscribe this context
    return { id, query };
  }
}

export interface EventSubscription {
  id: string;
  query: string;
}

export class EventQueryBuilder {
  private conditions = new Array<string>();
  addCondition(event: Event, value: string | EventAction): EventQueryBuilder {
    this.conditions.push(event + "='" + value + "'");
    return this;
  }
  build(): string {
    return this.conditions.join('&');
  }
}

export enum Event {
  Type = 'tm.event',
  Action = 'action',
  Sender = 'sender',
  Recipient = 'recipient',
  // TODO: more
}

export enum EventAction {
  Send = 'send',
  Burn = 'burn',
  SetMemoRegexp = 'set-memo-regexp',
  // TODO: more
}