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
  //revisar os flex-wrap
  const alignStyles = {
    center: 'flex-wrap justify-center text-center',
    start: 'flex-wrap justify-start text-start',
    justify: 'flex-wrap text-justify',
    end: 'flex-wrap justify-end text-end',
    inherit: 'flex-wrap justify-inherit',
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
    contained: {
      small: 'text-xs py-1 px-2',
      medium: 'text-sm py-2 px-4',
      large: 'text-base py-3 px-6',
    },
    outlined: {
      small: 'text-xs py-1 px-2',
      medium: 'text-sm py-2 px-4',
      large: 'text-base py-3 px-6',
    },
    text: {
      small: 'text-xs py-1 px-1',
      medium: 'text-sm py-2 px-2',
      large: 'text-base py-3 px-8',
    },
  }

  const sizeStyle = isFullWidth ? 'w-full' : buttonSize[variant][size]

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

  const defaultStyles = {
    contained: 'border-none text-custom-white shadow-custom-mui',
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
      className={`flex content-center min-w-16 rounded-sm ${isDisabledStyle} ${alignStyles[align]} ${sizeStyle} ${defaultStyles[variant]} ${buttonStyles[variant][color]} ${selectedAnimation} uppercase ${classNameCustom || ''}`}
      // className=''
      {...props}
    >
      {children}
    </button>
  )
}
