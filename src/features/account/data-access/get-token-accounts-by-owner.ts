import type { Address } from '@solana/kit'

import { SolanaClient } from '@/components/solana/solana-client'

export async function getTokenAccountsByOwner(
  rpc: SolanaClient['rpc'],
  { address, programId }: { address: Address; programId: Address },
) {
  return await rpc
    .getTokenAccountsByOwner(address, { programId }, { commitment: 'confirmed', encoding: 'jsonParsed' })
    .send()
    .then((res) => res.value ?? [])
}
