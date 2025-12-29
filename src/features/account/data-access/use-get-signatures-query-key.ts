import type { Address } from '@solana/kit'
import { useSolana } from '@/components/solana/use-solana'

export function useGetSignaturesQueryKey({ address }: { address: Address }) {
  const { cluster } = useSolana()

  return ['get-signatures', { cluster, address }]
}
