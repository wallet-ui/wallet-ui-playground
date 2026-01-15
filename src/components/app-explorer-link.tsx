import { ArrowUpRightFromSquare } from 'lucide-react'
import { ReactNode } from 'react'
import { ExplorerPath } from '@/lib/get-explorer-url.ts'
import { useSolanaExplorer } from '@/components/solana/use-solana-explorer.tsx'

export function AppExplorerLink({
  className,
  label = '',
  path,
}: {
  className?: string
  label: ReactNode
  path: ExplorerPath
}) {
  const getExplorerUrl = useSolanaExplorer()
  return (
    <a
      href={getExplorerUrl(path)}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono inline-flex gap-1`}
    >
      {label}
      <ArrowUpRightFromSquare size={12} />
    </a>
  )
}
