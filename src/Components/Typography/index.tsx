import type { ElementType } from 'react'
import type {
  TypographyType,
  TypographyColorType,
} from '../../utils/types/typographyType'

export const TypographyComponent: React.FC<TypographyType> = ({
  color = 'textPrimary',
  align = 'start',
  variant = 'span',
  children,
  classNameCustom,
  ...props
}: TypographyType) => {
  const Component = variant as ElementType

  const variantStyles = {
    h1: '',
    h2: '',
    h3: '',
    h4: '',
    h5: '',
    p: '',
    span: '',
    b: '',
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

    return mappedColor || `text-[#${color}]`
  }

  return (
    <Component
      className={`${variantStyles[variant]} ${alignStyles[align]} ${getColor(color)} ${classNameCustom}`}
      {...props}
    >
      {children}
    </Component>
  )
}
