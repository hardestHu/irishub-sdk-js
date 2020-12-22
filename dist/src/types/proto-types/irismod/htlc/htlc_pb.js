// source: irismod/htlc/htlc.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var cosmos_base_v1beta1_coin_pb = require('../../cosmos/base/v1beta1/coin_pb.js');
goog.object.extend(proto, cosmos_base_v1beta1_coin_pb);
var gogoproto_gogo_pb = require('../../gogoproto/gogo_pb.js');
goog.object.extend(proto, gogoproto_gogo_pb);
goog.exportSymbol('proto.irismod.htlc.HTLC', null, global);
goog.exportSymbol('proto.irismod.htlc.HTLCState', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.irismod.htlc.HTLC = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.irismod.htlc.HTLC.repeatedFields_, null);
};
goog.inherits(proto.irismod.htlc.HTLC, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.irismod.htlc.HTLC.displayName = 'proto.irismod.htlc.HTLC';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.irismod.htlc.HTLC.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.irismod.htlc.HTLC.prototype.toObject = function(opt_includeInstance) {
  return proto.irismod.htlc.HTLC.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.irismod.htlc.HTLC} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.HTLC.toObject = function(includeInstance, msg) {
  var f, obj = {
    sender: jspb.Message.getFieldWithDefault(msg, 1, ""),
    to: jspb.Message.getFieldWithDefault(msg, 2, ""),
    receiverOnOtherChain: jspb.Message.getFieldWithDefault(msg, 3, ""),
    amountList: jspb.Message.toObjectList(msg.getAmountList(),
    cosmos_base_v1beta1_coin_pb.Coin.toObject, includeInstance),
    secret: jspb.Message.getFieldWithDefault(msg, 5, ""),
    timestamp: jspb.Message.getFieldWithDefault(msg, 6, 0),
    expirationHeight: jspb.Message.getFieldWithDefault(msg, 7, 0),
    state: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.irismod.htlc.HTLC}
 */
proto.irismod.htlc.HTLC.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.irismod.htlc.HTLC;
  return proto.irismod.htlc.HTLC.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.irismod.htlc.HTLC} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.irismod.htlc.HTLC}
 */
proto.irismod.htlc.HTLC.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSender(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTo(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReceiverOnOtherChain(value);
      break;
    case 4:
      var value = new cosmos_base_v1beta1_coin_pb.Coin;
      reader.readMessage(value,cosmos_base_v1beta1_coin_pb.Coin.deserializeBinaryFromReader);
      msg.addAmount(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecret(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setTimestamp(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setExpirationHeight(value);
      break;
    case 8:
      var value = /** @type {!proto.irismod.htlc.HTLCState} */ (reader.readEnum());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.irismod.htlc.HTLC.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.irismod.htlc.HTLC.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.irismod.htlc.HTLC} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.irismod.htlc.HTLC.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSender();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTo();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReceiverOnOtherChain();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAmountList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      cosmos_base_v1beta1_coin_pb.Coin.serializeBinaryToWriter
    );
  }
  f = message.getSecret();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTimestamp();
  if (f !== 0) {
    writer.writeUint64(
      6,
      f
    );
  }
  f = message.getExpirationHeight();
  if (f !== 0) {
    writer.writeUint64(
      7,
      f
    );
  }
  f = message.getState();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * optional string sender = 1;
 * @return {string}
 */
proto.irismod.htlc.HTLC.prototype.getSender = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setSender = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string to = 2;
 * @return {string}
 */
proto.irismod.htlc.HTLC.prototype.getTo = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setTo = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string receiver_on_other_chain = 3;
 * @return {string}
 */
proto.irismod.htlc.HTLC.prototype.getReceiverOnOtherChain = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setReceiverOnOtherChain = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated cosmos.base.v1beta1.Coin amount = 4;
 * @return {!Array<!proto.cosmos.base.v1beta1.Coin>}
 */
proto.irismod.htlc.HTLC.prototype.getAmountList = function() {
  return /** @type{!Array<!proto.cosmos.base.v1beta1.Coin>} */ (
    jspb.Message.getRepeatedWrapperField(this, cosmos_base_v1beta1_coin_pb.Coin, 4));
};


/**
 * @param {!Array<!proto.cosmos.base.v1beta1.Coin>} value
 * @return {!proto.irismod.htlc.HTLC} returns this
*/
proto.irismod.htlc.HTLC.prototype.setAmountList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.cosmos.base.v1beta1.Coin=} opt_value
 * @param {number=} opt_index
 * @return {!proto.cosmos.base.v1beta1.Coin}
 */
proto.irismod.htlc.HTLC.prototype.addAmount = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.cosmos.base.v1beta1.Coin, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.clearAmountList = function() {
  return this.setAmountList([]);
};


/**
 * optional string secret = 5;
 * @return {string}
 */
proto.irismod.htlc.HTLC.prototype.getSecret = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setSecret = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional uint64 timestamp = 6;
 * @return {number}
 */
proto.irismod.htlc.HTLC.prototype.getTimestamp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setTimestamp = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional uint64 expiration_height = 7;
 * @return {number}
 */
proto.irismod.htlc.HTLC.prototype.getExpirationHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setExpirationHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional HTLCState state = 8;
 * @return {!proto.irismod.htlc.HTLCState}
 */
proto.irismod.htlc.HTLC.prototype.getState = function() {
  return /** @type {!proto.irismod.htlc.HTLCState} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.irismod.htlc.HTLCState} value
 * @return {!proto.irismod.htlc.HTLC} returns this
 */
proto.irismod.htlc.HTLC.prototype.setState = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * @enum {number}
 */
proto.irismod.htlc.HTLCState = {
  HTLC_STATE_OPEN: 0,
  HTLC_STATE_COMPLETED: 1,
  HTLC_STATE_EXPIRED: 2,
  HTLC_STATE_REFUNDED: 3
};

goog.object.extend(exports, proto.irismod.htlc);