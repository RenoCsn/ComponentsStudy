import type { ReactNode } from 'react'

export type ComponentType = {
  children?: ReactNode
  classNameCustom?: ClassNameCustom
}

export type ClassNameCustom = React.HTMLAttributes<{
  className?: string | undefined
}>
