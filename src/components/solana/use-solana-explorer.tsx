import { useWalletUi } from '@wallet-ui/react'
import { getExplorerUrl, GetExplorerUrlProps } from '@/lib/get-explorer-url.ts'

export function useSolanaExplorer(
  { provider }: { provider: GetExplorerUrlProps['provider'] } = { provider: 'solana' },
) {
  const { cluster } = useWalletUi()
  const explorer: Omit<GetExplorerUrlProps, 'path'> = {
    network: { id: cluster.id, endpoint: cluster.url },
    provider,
  }
  return (path: GetExplorerUrlProps['path']) => getExplorerUrl({ ...explorer, path })
}
