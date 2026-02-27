import type { ComponentType } from 'react'
import type { ColorType } from './colorsType'

export type TypographyType = ComponentType & {
  variant:
    | 'body1'
    | 'body2'
    | 'button'
    | 'caption'
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'inherit'
    | 'overline'
    | 'subtitle1'
    | 'subtitle2'
    | string
  color?: 'textPrimary' | 'textSecondary' | 'textDisabled' | ColorType
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right'
}
