import type { ComponentType } from './componentType'
import type { ColorType } from './colorsType'
import type { ComponentPropsWithoutRef } from 'react'
import type { IconName } from './iconType'

export type InputType = ComponentType &
  Omit<ComponentPropsWithoutRef<'input'>, 'size' | 'color'> & {
    color?: ColorType | string
    size?: 'small' | 'medium' | 'large'
    variant?: 'outlined' | 'filled' | 'standard'
    isDisabled?: boolean
    isFullWidth?: boolean
    isError?: boolean
    label?: string
    helperText?: string
    errorText?: string
    iconName?: IconName
    iconPosition?: 'start' | 'end'
  }
