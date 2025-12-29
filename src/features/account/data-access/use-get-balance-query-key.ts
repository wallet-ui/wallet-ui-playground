import type { Address } from '@solana/kit'
import { useSolana } from '@/components/solana/use-solana'

export function useGetBalanceQueryKey({ address }: { address: Address }) {
  const { cluster } = useSolana()

  return ['get-balance', { cluster, address }]
}
