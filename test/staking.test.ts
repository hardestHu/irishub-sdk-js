import { BaseTest } from './basetest';
import * as types from '../src/types';

describe('Staking Tests', () => {
  describe('Query', () => {
    test('query delegation', async () => {
      await BaseTest.getClient()
        .staking.queryDelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegations('iaa1eqvkfthtrr93g4p9qspp54w6dtjtrn27ar7rpw')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query unbonding delegation', async () => {
      await BaseTest.getClient()
        .staking.queryUnbondingDelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query unbonding delegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryUnbondingDelegations(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query redelegation', async () => {
      await BaseTest.getClient()
        .staking.queryRedelegation(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7',
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e',
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query redelegations of a delegator', async () => {
      await BaseTest.getClient()
        .staking.queryRedelegations(
          'faa1nl2dxgelxu9ektxypyul8cdjp0x3ksfqcgxhg7'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
    test('query delegations to a validator', async () => {
      await BaseTest.getClient()
        .staking.queryDelegationsTo(
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query unbonding delegations from a validator', async () => {
      await BaseTest.getClient()
        .staking.queryUnbondingDelegationsFrom(
          'fva1gwr3espfjtz9su9x40p635dgfvm4ph9v048een'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query redelegations from a validator', async () => {
      await BaseTest.getClient()
        .staking.queryRedelegationsFrom(
          'fva1nl2dxgelxu9ektxypyul8cdjp0x3ksfqdevc4e'
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query a validator', async () => {
      await BaseTest.getClient()
        .staking.queryValidator('iva1g5uv7khupczd6w03a7t066mwjdx9zkma82rnk0')
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query all validators', async () => {
      await BaseTest.getClient()
        .staking.queryValidators(1)
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query pool', async () => {
      await BaseTest.getClient()
        .staking.queryPool()
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });

    test('query params', async () => {
      await BaseTest.getClient()
        .staking.queryParams()
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });

  describe('Delegate', () => {
    test('delegate', async () => {
      await BaseTest.getClient()
        .staking.delegate(
          'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
          { denom: 'ubif', amount: '5' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Unbond', () => {
    test('unbond', async () => {
      await BaseTest.getClient()
        .staking.undelegate(
          'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
              { denom: 'ubif', amount: '1' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
  describe('Redelegate', () => {
    test('redelegate', async () => {
      await BaseTest.getClient()
        .staking.redelegate(
          'iva1svannhv2zaxefq83m7treg078udfk37lpjufkw',
          'iva1g5uv7khupczd6w03a7t066mwjdx9zkma82rnk0',
              { denom: 'ubif', amount: '1' },
          BaseTest.baseTx
        )
        .then(res => {
          console.log(JSON.stringify(res));
        })
        .catch(error => {
          console.log(error);
        });
    });
  });
});
