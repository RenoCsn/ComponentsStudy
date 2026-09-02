import type { SVGProps } from 'react'
import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'
import type * as Icons from '../../Components/Icons'

export type IconName = keyof typeof Icons

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
