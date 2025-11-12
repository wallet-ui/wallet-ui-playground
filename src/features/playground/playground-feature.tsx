import { useSolana } from '@/components/solana/use-solana.tsx'
import { useSearchParams } from 'react-router'
import { PlaygroundFeatureWallets } from '@/features/playground/playground-feature-wallets.tsx'
import { PlaygroundUiEmpty } from '@/features/playground/playground-ui-empty.tsx'
import { PlaygroundUiWalletSuggestions } from '@/features/playground/playground-ui-wallet-suggestions.tsx'

export default function PlaygroundFeature() {
  const { wallets } = useSolana()
  const [params, setParams] = useSearchParams()
  const selectedWalletName = params.get('name')
  const selectedWallet = wallets.find((wallet) => wallet.name === selectedWalletName) ?? null

  return (
    <div className="max-w-6xl my-4 mx-auto">
      {wallets.length ? (
        <PlaygroundFeatureWallets
          selectedWallet={selectedWallet}
          selectWallet={(name) => setParams({ name })}
          wallets={wallets}
        />
      ) : (
        <PlaygroundUiEmpty
          description="It looks like you have no Solana wallets installed."
          title="No Solana wallets found."
        >
          <div>Install any of the wallets below to get started.</div>
          <PlaygroundUiWalletSuggestions />
        </PlaygroundUiEmpty>
      )}
    </div>
  )
}
