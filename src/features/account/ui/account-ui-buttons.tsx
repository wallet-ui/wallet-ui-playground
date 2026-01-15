import { Address } from '@solana/kit'
import { AccountUiModalAirdrop } from './account-ui-modal-airdrop'
import { AccountUiModalReceive } from './account-ui-modal-receive'
import { AccountUiModalSend } from './account-ui-modal-send'
import { ErrorBoundary } from 'react-error-boundary'
import { useSolanaCluster } from '@/components/solana/use-solana-cluster.tsx'
import { useWalletUi } from '@wallet-ui/react'

export function AccountUiButtons({ address }: { address: Address }) {
  const { account } = useWalletUi()
  const cluster = useSolanaCluster()

  return account ? (
    <div>
      <div className="space-x-2">
        {cluster.id === 'solana:mainnet' ? null : <AccountUiModalAirdrop address={address} />}
        <ErrorBoundary fallback={null}>
          <AccountUiModalSend account={account} address={address} />
        </ErrorBoundary>
        <AccountUiModalReceive address={address} />
      </div>
    </div>
  ) : null
}
