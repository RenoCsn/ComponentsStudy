import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type DotLoadingType = ComponentType & {
  color?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  isLoading?: boolean
  maxDots?: number
  intervalMs?: number
}

export type CircleLoadingType = ComponentType & {
  color?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  speed?: number
  isLoading?: boolean
  thickness?: number
  hasValue?: boolean
  value?: number
  hasLabel?: boolean
  label?: string
  hasBackground?: boolean
  labelPosition?: 'inside' | 'left' | 'right' | 'top' | 'bottom'
}

export type ProgressionBarLoadingType = ComponentType & {
  color?: ColorType | string
  backgroundColor?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  speed?: number
  isReverse?: boolean
  isLoading?: boolean
  thickness?: number
  hasValue?: boolean
  value?: number
  hasLabel: boolean
  label?: string
  hasBackground?: boolean
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
}
