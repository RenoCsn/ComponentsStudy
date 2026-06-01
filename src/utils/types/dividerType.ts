import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type DividerType = ComponentType & {
  childrenAlign?: 'center' | 'left' | 'right'
  hasChildren?: boolean
  orientation?: 'vertical' | 'horizontal'
  color?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  borderStyle?: 'solid' | 'dotted' | 'double' | 'dashed'
  hasBlurry?: boolean
  isFlexItem?: boolean
  variant?: 'fullWidth' | 'inset' | 'middle'
}
