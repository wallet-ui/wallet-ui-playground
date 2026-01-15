import type { Address } from '@solana/kit'
import { useQuery } from '@tanstack/react-query'
import { useGetSignaturesQueryKey } from './use-get-signatures-query-key'
import { useSolanaClient } from '@/components/solana/use-solana-client.tsx'

export function useGetSignaturesQuery({ address }: { address: Address }) {
  const client  = useSolanaClient()

  return useQuery({
    queryKey: useGetSignaturesQueryKey({ address }),
    queryFn: () => client.rpc.getSignaturesForAddress(address).send(),
  })
}
