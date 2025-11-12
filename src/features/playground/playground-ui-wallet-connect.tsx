import { UiWallet, useConnect } from '@wallet-ui/react'
import { Button } from '@/components/ui/button.tsx'

export function PlaygroundUiWalletConnect({ wallet }: { wallet: UiWallet }) {
  const [isLoading, connect] = useConnect(wallet)

  return (
    <Button variant="secondary" disabled={isLoading} onClick={() => connect({ silent: true })}>
      Connect
    </Button>
  )
}
