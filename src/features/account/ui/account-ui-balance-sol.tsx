import { Lamports } from '@solana/kit'

function formatAmount(amount: bigint | number, decimals: number = 9): string {
  const maximumFractionDigits = Math.min(decimals, 9)
  const minimumFractionDigits = 0
  const value = bigIntToDecimal(amount, decimals)
  return new Intl.NumberFormat('en-US', { maximumFractionDigits, minimumFractionDigits }).format(value)
}

function bigIntToDecimal(amount: bigint | number, decimals: number = 9): number {
  return Number(amount) / 10 ** Math.min(decimals, 9)
}

export function AccountUiBalanceSol({ balance }: { balance: Lamports }) {
  return <span>{formatAmount(balance)}</span>
}
