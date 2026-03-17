import type { ButtonType } from '../../utils/types/buttonType'

export const ButtonComponent: React.FC<ButtonType> = ({
  color = 'primary',
  align = 'center',
  isDisabled = false,
  size = 'medium',
  isFullWidth = false,
  isAnimated = false,
  animationStyle = 'a',
  variant = 'contained',
  children,
  classNameCustom,
  ...props
}: ButtonType) => {
  const colorStyles = {
    primary: 'color-custom-primary-main',
    secondary: 'text-custom-secondary-main',
    success: 'text-custom-success-main',
    error: 'text-custom-error-main',
    info: 'text-custom-info-main',
    warning: 'text-custom-warning-main',
    inherit: 'text-inherit',
  }

  const alignStyles = {
    center: '',
    start: '',
    justify: '',
    left: '',
    right: '',
    end: '',
    inherit: '',
  }

  const isDisabledStyle = isDisabled ? '' : ''

  const buttonSize = {
    small: '',
    medium: '',
    large: '',
  }

  const sizeStyle = isFullWidth ? 'w-full' : buttonSize[size]

  const animation = {
    a: '',
    b: '',
    c: '',
    d: '',
    e: '',
  }

  const selectedAnimation = isAnimated
    ? animation[animationStyle]
    : 'animate-none'

  const variantStyle = {
    contained: '',
    outlined: '',
    text: '',
  }

  return (
    <button
      type='button'
      className={`${colorStyles[color]} ${alignStyles[align]} ${isDisabledStyle} ${sizeStyle} ${variantStyle[variant]} ${selectedAnimation} ${classNameCustom || ''}`}
      {...props}
    >
      {children}
    </button>
  )
}
