import { ellipsify } from '@wallet-ui/react'

export function PlaygroundUiWalletAddress({ address, len = 6 }: { address?: string; len?: number }) {
  if (!address) {
    return null
  }
  return ellipsify(address, len, '…')
}
