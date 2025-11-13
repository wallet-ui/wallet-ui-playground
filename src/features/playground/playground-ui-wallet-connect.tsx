import { UiWallet, useConnect } from '@wallet-ui/react'
import { Button } from '@/components/ui/button.tsx'
import { toast } from 'sonner'
import { Spinner } from '@/components/ui/spinner'
import { LucidePlug } from 'lucide-react'

export function PlaygroundUiWalletConnect({ wallet }: { wallet: UiWallet }) {
  const [isLoading, connect] = useConnect(wallet)

  return (
    <Button
      size="sm"
      variant="secondary"
      disabled={isLoading}
      onClick={async () =>
        connect().catch((err) => {
          toast.error(`Error connecting wallet: ${err}`)
        })
      }
    >
      {isLoading ? <Spinner /> : <LucidePlug />}
      Connect
    </Button>
  )
}
