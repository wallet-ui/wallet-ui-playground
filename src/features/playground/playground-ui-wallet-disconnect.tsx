import { UiWallet, useDisconnect } from '@wallet-ui/react'
import { Button } from '@/components/ui/button.tsx'
import { Spinner } from '@/components/ui/spinner.tsx'
import { LucideUnplug } from 'lucide-react'

export function PlaygroundUiWalletDisconnect({ wallet }: { wallet: UiWallet }) {
  const [isLoading, disconnect] = useDisconnect(wallet)

  return (
    <Button size="sm" variant="secondary" disabled={isLoading} onClick={() => disconnect()}>
      {isLoading ? <Spinner /> : <LucideUnplug />}
      Disconnect
    </Button>
  )
}
