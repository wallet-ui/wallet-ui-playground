import type { Address } from '@solana/kit'

import { useSolanaCluster } from '@/components/solana/use-solana-cluster.tsx'

export function useGetSignaturesQueryKey({ address }: { address: Address }) {
  const cluster = useSolanaCluster()

  return ['get-signatures', { cluster, address }]
}
