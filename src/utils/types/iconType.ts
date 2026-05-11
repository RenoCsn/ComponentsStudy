import type { SVGProps } from 'react'
import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type IconType = ComponentType & {
  color?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  isDisabled?: boolean
  isAnimated?: boolean
  animationStyle?:
    | 'spin'
    | 'flipHorizontal'
    | 'flipVertical'
    | 'expand'
    | 'decrease'
  svgProps?: SVGProps<SVGSVGElement>
}
