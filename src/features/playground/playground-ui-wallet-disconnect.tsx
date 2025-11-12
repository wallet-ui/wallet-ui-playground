import { UiWallet } from '@wallet-ui/react'
import { useDisconnect } from '@wallet-ui/react-gill'
import { Button } from '@/components/ui/button.tsx'

export function PlaygroundUiWalletDisconnect({ wallet }: { wallet: UiWallet }) {
  const [isLoading, disconnect] = useDisconnect(wallet)

  return (
    <Button variant="secondary" disabled={isLoading} onClick={() => disconnect()}>
      Disconnect
    </Button>
  )
}
