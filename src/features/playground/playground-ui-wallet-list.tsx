import { UiWallet, WalletUiIcon } from '@wallet-ui/react'
import { Button } from '@/components/ui/button.tsx'

export function PlaygroundUiWalletList({
  selectedWallet,
  setActiveWallet,
  wallets,
}: {
  setActiveWallet: (wallet: UiWallet) => void
  selectedWallet: UiWallet | null
  wallets: UiWallet[]
}) {
  return (
    <div className="space-y-4">
      {wallets.map((wallet) => (
        <Button
          key={wallet.name}
          size="lg"
          className="flex pr-2 justify-start text-lg w-full"
          variant={wallet.name === selectedWallet?.name ? 'outline' : 'secondary'}
          onClick={() => setActiveWallet(wallet)}
        >
          <WalletUiIcon wallet={wallet} />
          {wallet.name}
        </Button>
      ))}
    </div>
  )
}
