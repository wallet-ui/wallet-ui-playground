import { UiWallet, WalletUiIcon } from '@wallet-ui/react'
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { PlaygroundUiWalletDisconnect } from '@/features/playground/playground-ui-wallet-disconnect.tsx'
import { PlaygroundUiWalletConnect } from '@/features/playground/playground-ui-wallet-connect.tsx'
import { PlaygroundUiWalletFeatures } from '@/features/playground/playground-ui-wallet-features.tsx'

export function PlaygroundFeatureWalletListItem({ wallet }: { wallet: UiWallet }) {
  const connected = !!wallet.accounts?.length

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="gap-0">
          <CardTitle className="flex items-center text-lg gap-2 pt-0.5">
            <WalletUiIcon wallet={wallet} />
            <span>{wallet.name}</span>
          </CardTitle>
          <CardAction className="space-x-2">
            {connected ? (
              <PlaygroundUiWalletDisconnect wallet={wallet} />
            ) : (
              <PlaygroundUiWalletConnect wallet={wallet} />
            )}
          </CardAction>
        </CardHeader>
      </Card>

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
      <Card>
        <CardHeader>
          <CardTitle>Accounts</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ul>
            {wallet.accounts.map((account) => (
              <li key={account.address}>
                <div>{account.address}</div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
