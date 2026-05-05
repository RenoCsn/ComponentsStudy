import type { SVGProps } from 'react'
import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type IconType = ComponentType & {
  color?: ColorType | string
  size?: 'small' | 'medium' | 'large' | string
  isDisabled?: boolean
  // isAnimated?: boolean
  //TODO: escolher tipos de animação para os icones.
  // animationStyle?: 'spin' | 'colorChange' | 'expand' | 'decrease'
  svgProps?: SVGProps<SVGSVGElement>
}
