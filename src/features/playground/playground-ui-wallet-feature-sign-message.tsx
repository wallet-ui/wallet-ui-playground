import { ReadonlyUint8Array, UiWallet, UiWalletAccount, useWalletAccountMessageSigner } from '@wallet-ui/react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { SyntheticEvent, useCallback, useState } from 'react'
import { Address, getBase64Decoder } from 'gill'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Spinner } from '@/components/ui/spinner.tsx'
import { LucideKey } from 'lucide-react'
import { getErrorMessage } from '@/features/playground/playground-ui-error.tsx'

export function PlaygroundUiWalletFeatureSignMessage({
  account,
  onError,
  onSuccess,
}: {
  account: UiWalletAccount
  onError(err: unknown): void
  onSuccess(signature: string | undefined): void
  wallet: UiWallet
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState<string>('Hello Solana!')
  const messageSigner = useWalletAccountMessageSigner(account)

  const signMessage = useCallback(
    async (message: ReadonlyUint8Array) => {
      const [result] = await messageSigner.modifyAndSignMessages([
        {
          content: message as Uint8Array,
          signatures: {},
        },
      ])
      const signature = result?.signatures[account.address as Address]
      if (!signature) {
        throw new Error()
      }
      return signature as ReadonlyUint8Array
    },
    [account.address, messageSigner],
  )

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
          const signature = await signMessage(new TextEncoder().encode(text))
          onSuccess(getBase64Decoder().decode(signature))
        } catch (e) {
          console.log('e', e)
          onError(getErrorMessage(e, 'Unknown error occurred'))
        } finally {
          setIsLoading(false)
        }
      }}
    >
      <Card>
        <CardHeader>
          <CardTitle>Sign Message</CardTitle>
          <CardDescription>Sign a Message with this text</CardDescription>
          <CardAction>
            <Button size="lg" variant="outline" disabled={!text || isLoading} type="submit">
              {isLoading ? <Spinner /> : <LucideKey />}
              Sign Message
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Write a message to sign"
            onChange={(e: SyntheticEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
            value={text}
          />
        </CardContent>
      </Card>
    </form>
  )
}
