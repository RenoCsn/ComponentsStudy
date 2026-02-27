import type { ComponentType } from './componentType'

export type SkeletonType = ComponentType & {
  animation?: 'pulse' | 'wave' | false
  size?: 'small' | 'medium' | 'large' | string
  isLoading?: boolean
  variant?: 'circular' | 'rectangular' | 'rounded' | 'text' | string
  height?: number | string
  width?: number | string
}
