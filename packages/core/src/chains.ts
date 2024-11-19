import { ClusterUrl, devnet, mainnet, testnet } from '@solana/web3.js';

export type Chain = Readonly<{
    chain: `solana:${string}`;
    displayName: string;
    solanaExplorerClusterName: 'custom' | 'devnet' | 'mainnet-beta' | 'testnet';
    solanaRpcSubscriptionsUrl: ClusterUrl;
    solanaRpcUrl: ClusterUrl;
}>;

export function chainDevnet(props: Partial<Chain> = {}): Chain {
    return Object.freeze({
        chain: props.chain ?? 'solana:devnet',
        displayName: props.displayName ?? 'Devnet',
        solanaExplorerClusterName: props.solanaExplorerClusterName ?? 'devnet',
        solanaRpcSubscriptionsUrl: props.solanaRpcSubscriptionsUrl ?? devnet('wss://api.devnet.solana.com'),
        solanaRpcUrl: props.solanaRpcUrl ?? devnet('https://api.devnet.solana.com'),
    });
}

export function chainLocal(props: Partial<Chain> = {}): Chain {
    return Object.freeze({
        chain: props.chain ?? 'solana:local',
        displayName: props.displayName ?? 'Local',
        solanaExplorerClusterName: props.solanaExplorerClusterName ?? 'custom',
        solanaRpcSubscriptionsUrl: props.solanaRpcSubscriptionsUrl ?? devnet('ws://localhost:8900'),
        solanaRpcUrl: props.solanaRpcUrl ?? devnet('http://localhost:8899'),
    });
}

export function chainMainnet(props: Partial<Chain> = {}): Chain {
    return Object.freeze({
        chain: props.chain ?? 'solana:mainnet',
        displayName: props.displayName ?? 'Mainnet',
        solanaExplorerClusterName: props.solanaExplorerClusterName ?? 'mainnet-beta',
        solanaRpcSubscriptionsUrl: props.solanaRpcSubscriptionsUrl ?? mainnet('wss://api.mainnet-beta.solana.com'),
        solanaRpcUrl: props.solanaRpcUrl ?? mainnet('https://api.mainnet-beta.solana.com'),
    });
}

export function chainTestnet(props: Partial<Chain> = {}): Chain {
    return Object.freeze({
        chain: props.chain ?? 'solana:testnet',
        displayName: props.displayName ?? 'Testnet',
        solanaExplorerClusterName: props.solanaExplorerClusterName ?? 'testnet',
        solanaRpcSubscriptionsUrl: props.solanaRpcSubscriptionsUrl ?? testnet('wss://api.testnet.solana.com'),
        solanaRpcUrl: props.solanaRpcUrl ?? testnet('https://api.testnet.solana.com'),
    });
}
