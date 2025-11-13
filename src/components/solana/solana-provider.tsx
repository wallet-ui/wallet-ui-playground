import { ReactNode } from 'react'
import { createSolanaDevnet, createSolanaLocalnet, createWalletUiConfig, WalletUi } from '@wallet-ui/react'
import { createSolanaTestnet, WalletUiGillProvider } from '@wallet-ui/react-gill'
import { solanaMobileWalletAdapter } from './solana-mobile-wallet-adapter'

const config = createWalletUiConfig({
  clusters: [createSolanaDevnet(), createSolanaLocalnet(), createSolanaTestnet()],
})

solanaMobileWalletAdapter({ clusters: config.clusters })

export function SolanaProvider({ children }: { children: ReactNode }) {
  return (
    <WalletUi config={config}>
      <WalletUiGillProvider>{children}</WalletUiGillProvider>
    </WalletUi>
  )
}
