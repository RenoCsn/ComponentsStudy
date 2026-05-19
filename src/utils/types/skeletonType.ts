import type { ColorType } from './colorsType'
import type { ComponentType } from './componentType'

export type SkeletonType = ComponentType & {
  width?: number
  height?: number
  color?: ColorType | string
  isAnimated?: boolean
  animationStyle?: 'pulse' | 'wave'
  variant?: 'circular' | 'rectangular' | 'rounded' | 'text'
}
