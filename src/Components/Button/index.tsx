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
  const alignStyles = {
    center: 'justify-center text-center',
    start: 'justify-start text-start',
    justify: 'text-justify',
    left: 'text-left',
    right: 'text-right',
    end: 'justify-end text-end',
    inherit: 'justify-inherit',
  }

  const disabledStyles = {
    contained: 'bg-custom-black/15! text-custom-black/30! cursor-not-allowed',
    outlined:
      'text-custom-black/30! cursor-not-allowed outline-custom-black/15!',
    text: 'text-custom-black/30! cursor-not-allowed',
  }

  const isDisabledStyle = isDisabled
    ? disabledStyles[variant]
    : 'cursor-pointer'

  const buttonSize = {
    small: 'text-xs ',
    medium: 'text-sm ',
    large: 'text-base ',
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

  const paddings = {
    contained: 'py-2 px-5.5',
    outlined: 'py-2 px-5.5',
    text: 'py-2 px-8',
  }

  const defaultStyles = {
    contained: 'border-none text-custom-white',
    outlined: 'bg-transparent outline',
    text: 'border-none bg-transparent',
  }

  const buttonStyles = {
    contained: {
      primary: 'bg-custom-primary-main',
      secondary: 'bg-custom-secondary-main',
      success: 'bg-custom-success-main',
      error: 'bg-custom-error-main',
      info: 'bg-custom-info-main',
      warning: 'bg-custom-warning-main',
      inherit: 'bg-inherit',
    },
    outlined: {
      primary: 'text-custom-primary-main',
      secondary: 'text-custom-secondary-main',
      success: 'text-custom-success-main',
      error: 'text-custom-error-main ',
      info: 'text-custom-info-main',
      warning: 'text-custom-warning-main',
      inherit: 'text-inherit',
    },
    text: {
      primary: 'text-custom-primary-main ',
      secondary: 'text-custom-secondary-main ',
      success: 'text-custom-success-main ',
      error: 'text-custom-error-main ',
      info: 'text-custom-info-main ',
      warning: 'text-custom-warning-main ',
      inherit: 'text-inherit',
    },
  }

  return (
    <button
      type='button'
      className={`flex content-center min-w-16 rounded-sm ${isDisabledStyle} ${alignStyles[align]} ${sizeStyle} ${defaultStyles[variant]} ${buttonStyles[variant][color]} ${paddings[variant]} ${selectedAnimation} uppercase ${classNameCustom || ''}`}
      // className=''
      {...props}
    >
      {children}
    </button>
  )
}
