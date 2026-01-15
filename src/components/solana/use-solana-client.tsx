import { useWalletUi } from '@wallet-ui/react'
import { createSolanaClient } from '@/components/solana/create-solana-client.ts'
import { SolanaClient } from '@/components/solana/solana-client.ts'

export function useSolanaClient() {
  const { cluster } = useWalletUi()

  return createSolanaClient({ http: cluster.url }) as SolanaClient
}
