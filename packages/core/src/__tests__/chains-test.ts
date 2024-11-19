import { chainDevnet, chainLocal, chainMainnet, chainTestnet } from '../chains';

describe('chains test', () => {
    it('should generate a devnet chain', () => {
        expect(chainDevnet()).toMatchInlineSnapshot(`
            {
              "chain": "solana:devnet",
              "displayName": "Devnet",
              "solanaExplorerClusterName": "devnet",
              "solanaRpcSubscriptionsUrl": "wss://api.devnet.solana.com",
              "solanaRpcUrl": "https://api.devnet.solana.com",
            }
        `);
    });
    it('should generate a local chain', () => {
        expect(chainLocal()).toMatchInlineSnapshot(`
            {
              "chain": "solana:local",
              "displayName": "Local",
              "solanaExplorerClusterName": "custom",
              "solanaRpcSubscriptionsUrl": "ws://localhost:8900",
              "solanaRpcUrl": "http://localhost:8899",
            }
        `);
    });
    it('should generate a mainnet chain', () => {
        expect(chainMainnet()).toMatchInlineSnapshot(`
            {
              "chain": "solana:mainnet",
              "displayName": "Mainnet",
              "solanaExplorerClusterName": "mainnet-beta",
              "solanaRpcSubscriptionsUrl": "wss://api.mainnet-beta.solana.com",
              "solanaRpcUrl": "https://api.mainnet-beta.solana.com",
            }
        `);
    });
    it('should generate a testnet chain', () => {
        expect(chainTestnet()).toMatchInlineSnapshot(`
            {
              "chain": "solana:testnet",
              "displayName": "Testnet",
              "solanaExplorerClusterName": "testnet",
              "solanaRpcSubscriptionsUrl": "wss://api.testnet.solana.com",
              "solanaRpcUrl": "https://api.testnet.solana.com",
            }
        `);
    });
});
