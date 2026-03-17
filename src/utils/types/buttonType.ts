import type { ComponentType } from './componentType'
import type { ColorType } from './colorsType'

export type ButtonColorType = 'inherit' | ColorType

export type ButtonType = ComponentType & {
  color?: ButtonColorType | ColorType
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  isDisabled?: boolean
  size?: 'small' | 'medium' | 'large'
  isFullWidth?: boolean
  isAnimated?: boolean
  animationStyle?: 'a' | 'b' | 'c' | 'd' | 'e'
  variant?: 'contained' | 'outlined' | 'text'
}
