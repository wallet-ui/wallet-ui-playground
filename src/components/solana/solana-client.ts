import type { ClusterUrl } from '@solana/kit'
import { createSolanaClient } from './create-solana-client'

export type SolanaClient<T extends ClusterUrl = string> = ReturnType<typeof createSolanaClient<T>>
