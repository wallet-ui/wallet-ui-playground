import { UiWallet } from '@wallet-ui/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { PlaygroundUiWalletFeatures } from '@/features/playground/playground-ui-wallet-features.tsx'

export function PlaygroundUiWalletOverview({ wallet }: { wallet: UiWallet }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            <PlaygroundUiWalletFeatures
              all={['solana:signAndSendTransaction', 'solana:signIn', 'solana:signMessage', 'solana:signTransaction']}
              selected={wallet.features.filter((f) => f.startsWith('solana:')).sort()}
              title="Features"
            />
          </div>
          <div className="col-span-1">
            <PlaygroundUiWalletFeatures
              all={['solana:devnet', 'solana:localnet', 'solana:mainnet', 'solana:testnet']}
              selected={wallet.chains.filter((f) => f.startsWith('solana:')).sort()}
              title="Chains"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
