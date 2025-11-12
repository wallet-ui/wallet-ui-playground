import { useSolana } from '@/components/solana/use-solana.tsx'
import { useSearchParams } from 'react-router'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert.tsx'
import { PlaygroundFeatureWalletList } from '@/features/playground/playground-feature-wallet-list.tsx'

export default function PlaygroundFeature() {
  const { wallets } = useSolana()
  const [params, setParams] = useSearchParams()
  const selectedWalletName = params.get('name')
  const selectedWallet = wallets.find((wallet) => wallet.name === selectedWalletName) ?? null

  return (
    <div className="max-w-6xl my-4 mx-auto">
      {wallets.length ? (
        <PlaygroundFeatureWalletList
          selectedWallet={selectedWallet}
          selectWallet={(name) => setParams({ name })}
          wallets={wallets}
        />
      ) : (
        <Alert variant="destructive">
          <AlertTitle>No Solana wallets found.</AlertTitle>
          <AlertDescription>It looks like you have no Solana wallets installed.</AlertDescription>
        </Alert>
      )}
    </div>
  )
}

// function PlaygroundFeatureWalletSignMessage({ account }: { account: UiWalletAccount | undefined }) {
//   return account ? <div>Wallet Sign Message</div> : null
// }
//
// function PlaygroundFeatureWalletSignIn({ account }: { account: UiWalletAccount | undefined }) {
//   return account ? <div>Wallet Sign In</div> : null
// }
//
// function PlaygroundFeatureWalletSignTransaction({ account }: { account: UiWalletAccount | undefined }) {
//   return account ? <div>Wallet Sign Transaction</div> : null
// }
