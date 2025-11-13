import { UiWallet, UiWalletAccount } from '@wallet-ui/react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.tsx'

export function PlaygroundUiWalletFeatureSignTransaction({
  account,
  wallet,
}: {
  account: UiWalletAccount
  wallet: UiWallet
}) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Feature: Sign Transaction</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <pre>{wallet.name}</pre>
        <pre>{account.address}</pre>
      </CardContent>
    </Card>
  )
}
