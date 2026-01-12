import { useWalletUi } from '@wallet-ui/react'
import { GetExplorerUrlProps } from '@/lib/get-explorer-url.ts'
import { createSolanaClient } from './create-solana-client'
import { SolanaClient } from '@/components/solana/solana-client.ts'

/**
 * Custom hook to abstract Wallet UI and related functionality from your app.
 *
 * This is a great place to add custom shared Solana logic or clients.
 */
export function useSolana() {
  const { cluster, ...walletUi } = useWalletUi()
  const client = createSolanaClient({ http: cluster.url }) as SolanaClient
  const explorer: Omit<GetExplorerUrlProps, 'path'> = {
    network: { id: cluster.id, endpoint: cluster.url },
    provider: 'solana',
  }
  return {
    ...walletUi,
    client,
    cluster,
    explorer,
  }
}
