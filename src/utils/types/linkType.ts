import type { ComponentType } from './componentType'
import type { ColorType } from './colorsType'
import type { ComponentPropsWithoutRef } from 'react'

export type LinkType = ComponentType &
  Omit<ComponentPropsWithoutRef<'a'>, 'color'> & {
    color?: ColorType | string
    textDecoration?: 'solid' | 'dotted' | 'double' | 'dashed'
    textDecorationColor?: ColorType | string
    textDecorationThickness?: 'small' | 'medium' | 'large' | string
    isAnimated?: boolean
    animationStyle?: 'underlineDown'
  }
