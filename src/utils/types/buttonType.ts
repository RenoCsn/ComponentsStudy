import type { ComponentType } from 'react'
import type { ColorType } from './colorsType'

export type ButtonType = ComponentType & {
  color?: 'inherit' | ColorType
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
  isDisabled?: boolean
  size?: 'small' | 'medium' | 'large' | string
  fullWidth?: boolean
  isAnimated?: boolean
  animationStyle?: ''
  variant?: 'contained' | 'outlined' | 'text' | string
}
