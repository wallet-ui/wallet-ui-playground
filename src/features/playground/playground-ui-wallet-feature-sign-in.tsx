import { SolanaClusterId, SolanaSignInInput, UiWallet, UiWalletAccount, useSignIn } from '@wallet-ui/react'
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { MouseEvent, SyntheticEvent, useCallback, useMemo, useState } from 'react'
import { Button } from '@/components/ui/button.tsx'
import { Spinner } from '@/components/ui/spinner.tsx'
import { LucideKey } from 'lucide-react'
import { Input } from '@/components/ui/input.tsx'

function PlaygroundUiPayload({
  data,
  label,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
  label?: string
}) {
  return (
    <pre className="text-xs text-muted-foreground">
      {label ? `${label}: ` : ''}
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

const now = new Date()
const expiresAtSeconds = 10

function useSignInPayload({
  account,
  cluster,
  statement,
}: {
  account: UiWalletAccount
  cluster: SolanaClusterId
  statement: string
}) {
  // https://github.com/phantom/sign-in-with-solana?tab=readme-ov-file#sign-in-input-fields
  const url = new URL(window.location.href)
  const domain = url.host
  const uri = url.origin
  const address = account.address
  const version = '1'
  const chainId: SolanaClusterId = cluster
  const nonce = '12345678ABCDEFGH'
  const issuedAt = now.toISOString()
  const expirationTime = new Date(now.getTime() + expiresAtSeconds * 1000).toISOString()
  const notBefore = now.toISOString()
  const requestId = Math.random().toString().slice(2)
  const resources: string[] = useMemo(() => [`${uri}/foo`, `${uri}/bar`, `${uri}/baz`], [])

  const payload: SolanaSignInInput = useMemo(() => {
    return {
      address,
      uri,
      domain,
      statement,
      version,
      chainId,
      nonce,
      issuedAt,
      expirationTime,
      notBefore,
      requestId,
      resources: resources.length ? resources : undefined,
    }
  }, [
    address,
    uri,
    domain,
    cluster,
    version,
    chainId,
    nonce,
    issuedAt,
    expirationTime,
    notBefore,
    requestId,
    resources,
  ])

  return {
    payload,
  }
}

export function PlaygroundUiWalletFeatureSignIn({
  account,
  cluster,
  onError,
  onSuccess,
  wallet,
}: {
  account: UiWalletAccount
  cluster: SolanaClusterId
  onError(err: unknown): void
  onSuccess(account: UiWalletAccount | undefined): void
  wallet: UiWallet
}) {
  const [isLoading, setIsLoading] = useState(false)
  const [text, setText] = useState<string>('We hope you enjoy your stay!')
  const { payload } = useSignInPayload({ account, cluster, statement: text })
  const signIn = useSignIn(wallet)

  const handleSignInClick = useCallback(
    async (e: MouseEvent) => {
      e.preventDefault()
      try {
        setIsLoading(true)
        try {
          const { account } = await signIn(payload)
          onSuccess(account)
        } finally {
          setIsLoading(false)
        }
      } catch (e) {
        onError(e)
      }
    },
    [signIn, onSuccess, onError, payload],
  )

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Test the Sign In feature</CardDescription>
        <CardAction>
          <Button size="lg" variant="outline" disabled={isLoading} onClick={handleSignInClick}>
            {isLoading ? <Spinner /> : <LucideKey />}
            Sign in
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Write the sign in statement"
          onChange={(e: SyntheticEvent<HTMLInputElement>) => setText(e.currentTarget.value)}
          value={text}
        />

        <PlaygroundUiPayload data={payload} label="Sign In Payload" />
      </CardContent>
    </Card>
  )
}
