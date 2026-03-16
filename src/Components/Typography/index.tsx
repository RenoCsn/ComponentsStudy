import type { ElementType } from 'react'
import type {
  TypographyType,
  TypographyColorType,
} from '../../utils/types/typographyType'

export const TypographyComponent: React.FC<TypographyType> = ({
  color = 'textPrimary',
  align = 'start',
  variant = 'p',
  children,
  classNameCustom,
  ...props
}: TypographyType) => {
  const Component = variant as ElementType

  const variantStyles = {
    h1: 'font-bold text-8xl tracking-tight',
    h2: 'font-bold text-6xl tracking-tight',
    h3: 'font-semibold text-5xl tracking-normal',
    h4: 'font-semibold text-4xl tracking-normal',
    h5: 'font-semibold text-2xl tracking-normal',
    p: 'font-normal text-base',
    span: 'font-normal text-sm',
    b: 'font-medium text-sm uppercase tracking-wide',
  }

  const alignStyles = {
    center: 'text-center',
    start: 'text-start',
    justify: 'text-justify',
    left: 'text-left',
    right: 'text-right',
    end: 'text-end',
  }

  const getColor = (color: TypographyColorType | string): string => {
    const colorStyles = {
      textPrimary: 'text-[#000000de]',
      textSecondary: 'text-[#00000099]',
      textDisabled: 'text-[#00000061]',
      primary: 'text-custom-primary-main',
      secondary: 'text-custom-secondary-main',
      success: 'text-custom-success-main',
      error: 'text-custom-error-main',
      info: 'text-custom-info-main',
      warning: 'text-custom-warning-main',
    }

    const mappedColor = colorStyles[color as keyof typeof colorStyles]
    const textColor = 'text-[#' + color + ']'

    return mappedColor || textColor
  }

  return (
    <Component
      className={`${variantStyles[variant]} ${alignStyles[align]} ${getColor(color)} ${classNameCustom || ''}`}
      {...props}
    >
      {children}
    </Component>
  )
}
