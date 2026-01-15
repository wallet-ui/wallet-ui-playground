import type { Address } from '@solana/kit'
import { TOKEN_PROGRAM_ADDRESS } from '@solana-program/token'
import { TOKEN_2022_PROGRAM_ADDRESS } from '@solana-program/token-2022'
import { useQuery } from '@tanstack/react-query'
import { getTokenAccountsByOwner } from './get-token-accounts-by-owner'
import { useSolanaClient } from '@/components/solana/use-solana-client.tsx'
import { useSolanaCluster } from '@/components/solana/use-solana-cluster.tsx'

export function useGetTokenAccountsQuery({ address }: { address: Address }) {
  const client = useSolanaClient()
  const cluster = useSolanaCluster()

  return useQuery({
    queryKey: ['get-token-accounts', { cluster, address }],
    queryFn: async () =>
      Promise.all([
        getTokenAccountsByOwner(client.rpc, { address, programId: TOKEN_PROGRAM_ADDRESS }),
        getTokenAccountsByOwner(client.rpc, { address, programId: TOKEN_2022_PROGRAM_ADDRESS }),
      ]).then(([tokenAccounts, token2022Accounts]) => [...tokenAccounts, ...token2022Accounts]),
  })
}
