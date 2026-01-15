import { SolanaClusterId, UiWallet, WalletUiIcon } from '@wallet-ui/react'
import { Card, CardAction, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.tsx'
import { PlaygroundUiWalletDisconnect } from '@/features/playground/playground-ui-wallet-disconnect.tsx'
import { PlaygroundUiWalletConnect } from '@/features/playground/playground-ui-wallet-connect.tsx'
import { PlaygroundUiWalletOverview } from '@/features/playground/playground-ui-wallet-overview.tsx'
import { PlaygroundUiWalletFeatureSignIn } from '@/features/playground/playground-ui-wallet-feature-sign-in.tsx'
import { PlaygroundUiWalletAddress } from '@/features/playground/playground-ui-wallet-address.tsx'
import { PlaygroundUiWalletFeatureSignMessage } from '@/features/playground/playground-ui-wallet-feature-sign-message.tsx'
import { ErrorBoundary } from 'react-error-boundary'
import { PlaygroundUiError } from '@/features/playground/playground-ui-error.tsx'
import { Fragment } from 'react'
import { toast } from 'sonner'
import { PlaygroundUiWalletFeatureSignAndSendTransaction } from '@/features/playground/playground-ui-wallet-feature-sign-and-send-transaction.tsx'
import { AppExplorerLink } from '@/components/app-explorer-link.tsx'
import { PlaygroundUiWalletFeatureSignTransaction } from '@/features/playground/playground-ui-wallet-feature-sign-transaction.tsx'
import { useSolanaClient } from '@/components/solana/use-solana-client.tsx'

export function PlaygroundFeatureWalletListItem({ cluster, wallet }: { cluster: SolanaClusterId; wallet: UiWallet }) {
  const client = useSolanaClient()
  const connected = !!wallet.accounts?.length
  const account = wallet.accounts.length ? wallet.accounts[0] : undefined
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-lg gap-2">
            <WalletUiIcon wallet={wallet} />
            <span>{wallet.name}</span>
          </CardTitle>
          <CardDescription>
            {connected ? (
              <PlaygroundUiWalletAddress address={account?.address} />
            ) : (
              `Connect to ${wallet.name} to see the accounts`
            )}
          </CardDescription>
          <CardAction className="space-x-2">
            {connected ? (
              <PlaygroundUiWalletDisconnect wallet={wallet} />
            ) : (
              <PlaygroundUiWalletConnect wallet={wallet} />
            )}
          </CardAction>
        </CardHeader>
      </Card>
      <PlaygroundUiWalletOverview wallet={wallet} />
      {account ? (
        <Fragment>
          <ErrorBoundary resetKeys={[wallet.name]} fallbackRender={({ error }) => <PlaygroundUiError error={error} />}>
            <PlaygroundUiWalletFeatureSignIn
              account={account}
              cluster={cluster}
              onError={(err) => toast.error('Error signing in', { description: `${err}` })}
              onSuccess={(account) =>
                toast.success('Signing in success', {
                  description: <PlaygroundUiWalletAddress address={account?.address} />,
                })
              }
              wallet={wallet}
            />
          </ErrorBoundary>
          <ErrorBoundary resetKeys={[wallet.name]} fallbackRender={({ error }) => <PlaygroundUiError error={error} />}>
            <PlaygroundUiWalletFeatureSignMessage
              account={account}
              onError={(err) => toast.error('Error signing message', { description: `${err}` })}
              onSuccess={(signature) =>
                toast.success('Signing message success', {
                  description: <PlaygroundUiWalletAddress address={signature} len={10} />,
                })
              }
              wallet={wallet}
            />
          </ErrorBoundary>
          <ErrorBoundary resetKeys={[wallet.name]} fallbackRender={({ error }) => <PlaygroundUiError error={error} />}>
            <PlaygroundUiWalletFeatureSignAndSendTransaction
              account={account}
              client={client}
              cluster={cluster}
              onError={(err) => toast.error('Error signing and sending transaction', { description: `${err}` })}
              onSuccess={(signature) =>
                toast.success('Signing and sending transaction success', {
                  description: (
                    <AppExplorerLink
                      label={<PlaygroundUiWalletAddress address={signature} len={10} />}
                      path={`/tx/${signature}`}
                    />
                  ),
                })
              }
              wallet={wallet}
            />
          </ErrorBoundary>
          <ErrorBoundary resetKeys={[wallet.name]} fallbackRender={({ error }) => <PlaygroundUiError error={error} />}>
            <PlaygroundUiWalletFeatureSignTransaction
              account={account}
              client={client}
              cluster={cluster}
              onError={(err) => toast.error('Error signing transaction', { description: `${err}` })}
              onSuccess={(signature) =>
                toast.success('Signing transaction success', {
                  description: (
                    <AppExplorerLink
                      label={<PlaygroundUiWalletAddress address={signature} len={10} />}
                      path={`/tx/${signature}`}
                    />
                  ),
                })
              }
              wallet={wallet}
            />
          </ErrorBoundary>
        </Fragment>
      ) : null}
    </div>
  )
}
