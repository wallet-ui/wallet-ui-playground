import { UiWallet } from '@wallet-ui/react'
import { PlaygroundUiWalletList } from '@/features/playground/playground-ui-wallet-list.tsx'
import { PlaygroundFeatureWalletListItem } from '@/features/playground/playground-feature-wallet-list-item.tsx'

export function PlaygroundFeatureWalletList({
  selectedWallet,
  selectWallet,
  wallets,
}: {
  selectedWallet: UiWallet | null
  selectWallet: (name: string) => void
  wallets: UiWallet[]
}) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 gap-y-2">
        <div className="">
          <PlaygroundUiWalletList
            selectedWallet={selectedWallet}
            setActiveWallet={(wallet) => selectWallet(wallet.name)}
            wallets={wallets}
          />
        </div>
        <div className="col-span-2">
          {selectedWallet ? <PlaygroundFeatureWalletListItem wallet={selectedWallet} /> : 'Select wallet'}
        </div>
      </div>
    </div>
  )
}
