import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type DotLoadingType = ComponentType & {
  color?: 'inherit' | ColorType
  size?: 'small' | 'medium' | 'large' | string
  isLoading?: boolean
  thickness?: number
  hasValue?: boolean
  value?: number
}

export type CircleLoadingType = ComponentType & {
  color?: 'inherit' | ColorType
  size?: 'small' | 'medium' | 'large' | string
  isLoading?: boolean
  thickness?: number
  hasValue?: boolean
  value?: number
  hasLabel: boolean
  label?: number
  hasBackground?: boolean
}

export type ProgressionBarLoadingType = ComponentType & {
  color?: 'inherit' | ColorType
  size?: 'small' | 'medium' | 'large' | string
  isLoading?: boolean
  thickness?: number
  hasValue?: boolean
  value?: number
  hasLabel: boolean
  label?: number
  hasBackground?: boolean
  labelPosition?: 'left' | 'right' | 'top' | 'bottom'
}
