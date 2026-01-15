import type { Address } from '@solana/kit'
import { useQuery } from '@tanstack/react-query'
import { useGetBalanceQueryKey } from './use-get-balance-query-key'
import { useSolanaClient } from '@/components/solana/use-solana-client.tsx'

export function useGetBalanceQuery({ address }: { address: Address }) {
  const client = useSolanaClient()

  return useQuery({
    retry: false,
    queryKey: useGetBalanceQueryKey({ address }),
    queryFn: () => client.rpc.getBalance(address).send(),
  })
}
