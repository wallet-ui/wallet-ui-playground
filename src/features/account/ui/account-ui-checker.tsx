import { address } from '@solana/kit'
import { AccountUiBalanceCheck } from './account-ui-balance-check'
import { useWalletUi } from '@wallet-ui/react'

export function AccountUiChecker() {
  const { account } = useWalletUi()
  if (!account) {
    return null
  }
  return <AccountUiBalanceCheck address={address(account.address)} />
}
