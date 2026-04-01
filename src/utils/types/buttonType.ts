import type { ComponentType } from './componentType'
import type { ColorType } from './colorsType'

export type ButtonColorType = 'inherit' | ColorType

export type ButtonType = ComponentType & {
  color?: ButtonColorType | ColorType
  align?: 'center' | 'inherit' | 'justify' | 'start' | 'end'
  isDisabled?: boolean
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  isAnimated?: boolean
  animationStyle?: 'simple' | 'changeColor' | 'expand' | 'decrease' | 'bounce'
  variant?: 'contained' | 'outlined' | 'text'
  onClick?: () => void
}
