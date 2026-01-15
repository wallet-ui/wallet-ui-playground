import { useWalletUi } from '@wallet-ui/react'

export function useSolanaCluster() {
  const { cluster } = useWalletUi()

  return cluster
}
