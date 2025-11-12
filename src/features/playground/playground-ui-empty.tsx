import { ReactNode } from 'react'
import { Empty, EmptyContent, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle } from '@/components/ui/empty.tsx'
import { LucideWallet2 } from 'lucide-react'

export function PlaygroundUiEmpty({
  children,
  description,
  title,
}: {
  children?: ReactNode
  description: ReactNode
  title: ReactNode
}) {
  return (
    <Empty className="border border-dashed gap-3">
      <EmptyMedia variant="icon">
        <LucideWallet2 />
      </EmptyMedia>
      <EmptyHeader>
        <EmptyTitle>{title}</EmptyTitle>
        <EmptyDescription>{description}</EmptyDescription>
      </EmptyHeader>
      {children ? <EmptyContent>{children}</EmptyContent> : null}
    </Empty>
  )
}
