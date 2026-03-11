import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type TextColorType = 'textPrimary' | 'textSecondary' | 'textDisabled'

export type TypographyColorType = TextColorType | ColorType

export type TypographyType = ComponentType & {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'span' | 'b'
  color?: TypographyColorType
  align?: 'center' | 'start' | 'justify' | 'left' | 'right' | 'end'
}
