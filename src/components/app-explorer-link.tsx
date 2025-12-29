import { useSolana } from '@/components/solana/use-solana'
import { ArrowUpRightFromSquare } from 'lucide-react'
import { ReactNode } from 'react'
import { ExplorerPath, getExplorerUrl } from '@/lib/get-explorer-url.ts'

export function AppExplorerLink({
  className,
  label = '',
  path,
}: {
  className?: string
  label: ReactNode
  path: ExplorerPath
}) {
  const { explorer } = useSolana()
  return (
    <a
      href={getExplorerUrl({ ...explorer, path })}
      target="_blank"
      rel="noopener noreferrer"
      className={className ? className : `link font-mono inline-flex gap-1`}
    >
      {label}
      <ArrowUpRightFromSquare size={12} />
    </a>
  )
}
