import { SolanaClusterId, UiWallet } from '@wallet-ui/react'
import { PlaygroundUiWalletList } from '@/features/playground/playground-ui-wallet-list.tsx'
import { PlaygroundFeatureWalletListItem } from '@/features/playground/playground-feature-wallet-list-item.tsx'
import { PlaygroundUiEmpty } from '@/features/playground/playground-ui-empty.tsx'

export function PlaygroundFeatureWallets({
  selectedCluster,
  selectedWallet,
  selectWallet,
  wallets,
}: {
  selectedCluster: SolanaClusterId
  selectedWallet: UiWallet | null
  selectWallet: (name: string) => void
  wallets: UiWallet[]
}) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 space-y-6 md:space-y-0 md:gap-4 gap-y-2">
        <div className="">
          <PlaygroundUiWalletList
            selectedWallet={selectedWallet}
            setActiveWallet={(wallet) => selectWallet(wallet.name)}
            wallets={wallets}
          />
        </div>
        <div className="col-span-2">
          {selectedWallet ? (
            <PlaygroundFeatureWalletListItem cluster={selectedCluster} wallet={selectedWallet} />
          ) : (
            <PlaygroundUiEmpty title="Select wallet" description="Select a wallet from the list to continue" />
          )}
        </div>
      </div>
    </div>
  )
}
