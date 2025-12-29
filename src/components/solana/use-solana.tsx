import { useWalletUi } from '@wallet-ui/react'
import { useWalletUiGill } from '@wallet-ui/react-gill'
import { GetExplorerUrlProps } from '@/lib/get-explorer-url.ts'

/**
 * Custom hook to abstract Wallet UI and related functionality from your app.
 *
 * This is a great place to add custom shared Solana logic or clients.
 */
export function useSolana() {
  const { cluster, ...walletUi } = useWalletUi()
  const client = useWalletUiGill()
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
