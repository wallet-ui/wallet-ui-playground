import { useQuery } from '@tanstack/react-query'
import { useSolanaClient } from '@/components/solana/use-solana-client.tsx'
import { useSolanaCluster } from '@/components/solana/use-solana-cluster.tsx'

export function useClusterVersion() {
  const client = useSolanaClient()
  const cluster = useSolanaCluster()
  return useQuery({
    retry: false,
    queryKey: ['version', { cluster }],
    queryFn: () => client.rpc.getVersion().send(),
  })
}
