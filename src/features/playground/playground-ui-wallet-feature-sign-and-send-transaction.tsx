import { SolanaClusterId, UiWallet, UiWalletAccount } from '@wallet-ui/react'
import { useWalletAccountTransactionSendingSigner } from '@solana/react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { SyntheticEvent, useCallback, useState } from 'react'
import {
  appendTransactionMessageInstruction,
  assertIsTransactionMessageWithSingleSendingSigner,
  createTransactionMessage,
  getBase58Decoder,
  pipe,
  setTransactionMessageFeePayerSigner,
  setTransactionMessageLifetimeUsingBlockhash,
  signAndSendTransactionMessageWithSigners,
  SolanaClient,
} from 'gill'
import { Input } from '@/components/ui/input.tsx'
import { Button } from '@/components/ui/button.tsx'
import { Spinner } from '@/components/ui/spinner.tsx'
import { LucideKey } from 'lucide-react'
import { getErrorMessage } from '@/features/playground/playground-ui-error.tsx'
import { getAddMemoInstruction } from 'gill/programs'

export function PlaygroundUiWalletFeatureSignAndSendTransaction({
  account,
  cluster,
  client,
  onError,
  onSuccess,
}: {
  client: SolanaClient
  cluster: SolanaClusterId
  account: UiWalletAccount
  onError(err: unknown): void
  onSuccess(signature: string | undefined): void
  wallet: UiWallet
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState<string>('Hello Solana!')
  const transactionSigner = useWalletAccountTransactionSendingSigner(account, cluster)

  const signTransaction = useCallback(async () => {
    const { value: latestBlockhash } = await client.rpc.getLatestBlockhash({ commitment: 'confirmed' }).send()
    const message = pipe(
      createTransactionMessage({ version: 0 }),
      (m) => setTransactionMessageFeePayerSigner(transactionSigner, m),
      (m) => setTransactionMessageLifetimeUsingBlockhash(latestBlockhash, m),
      (m) => appendTransactionMessageInstruction(getAddMemoInstruction({ memo: text }), m),
    )

    assertIsTransactionMessageWithSingleSendingSigner(message)
    const signatureBytes = await signAndSendTransactionMessageWithSigners(message)
    const signature = getBase58Decoder().decode(signatureBytes)

    if (!signature) {
      throw new Error()
    }
    return signature
  }, [client.rpc, text, transactionSigner])

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
          const signature = await signTransaction()
          onSuccess(signature)
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
          <CardTitle>Sign and Send Transaction</CardTitle>
          <CardDescription>Sign and Send a Transaction with a memo text</CardDescription>
          <CardAction>
            <Button size="lg" variant="outline" disabled={!text || isLoading} type="submit">
              {isLoading ? <Spinner /> : <LucideKey />}
              Sign Transaction
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Write a memo text sign and send as transaction"
            onChange={(e: SyntheticEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
            value={text}
          />
        </CardContent>
      </Card>
    </form>
  )
}
