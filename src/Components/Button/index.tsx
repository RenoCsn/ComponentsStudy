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

  const sizeStyle = isFullWidth ? 'w-full' : ''

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
    contained:
      'border-none text-custom-white shadow-custom-mui focus:shadow-custom-mui-focus transition active:bg-custom-primary-main/70 focus:bg-custom-primary-main/70 active:shadow-custom-mui-focus duration-5 focus:outline-offset-4 active:ease-in-out',
    outlined: 'bg-transparent outline',
    text: 'border-none bg-transparent',
  }

  const buttonStyles = {
    contained: {
      primary: 'bg-custom-primary-main hover:bg-custom-primary-dark',
      secondary: 'bg-custom-secondary-main hover:bg-custom-secondary-dark',
      success: 'bg-custom-success-main hover:bg-custom-success-dark ',
      error: 'bg-custom-error-main hover:bg-custom-error-dark ',
      info: 'bg-custom-info-main hover:bg-custom-info-dark',
      warning: 'bg-custom-warning-main hover:bg-custom-warning-dark',
      inherit: 'bg-inherit hover:bg-inherit/8',
    },
    outlined: {
      primary:
        'text-custom-primary-main outline-custom-primary-main/50 hover:bg-custom-primary-main/4 hover:outline-custom-primary-main',
      secondary:
        'text-custom-secondary-main outline-custom-secondary-main/50 hover:bg-custom-secondary-main/4 hover:outline-custom-secondary-main',
      success:
        'text-custom-success-main outline-custom-success-main/50 hover:bg-custom-success-main/4 hover:outline-custom-success-main',
      error:
        'text-custom-error-main outline-custom-error-main/50 hover:bg-custom-error-main/4 hover:outline-custom-error-main',
      info: 'text-custom-info-main outline-custom-info-main/50 hover:bg-custom-info-main/4 hover:outline-custom-info-main',
      warning:
        'text-custom-warning-main outline-custom-warning-main/50 hover:bg-custom-warning-main/4 hover:outline-custom-warning-main',
      inherit:
        'text-inherit outline-inherit/50 hover:bg-inherit/4 hover:outline-inherit',
    },
    text: {
      primary: 'text-custom-primary-main hover:bg-custom-primary-main/4',
      secondary: 'text-custom-secondary-main hover:bg-custom-secondary-main/4',
      success: 'text-custom-success-main hover:bg-custom-success-main/4',
      error: 'text-custom-error-main hover:bg-custom-error-main/4',
      info: 'text-custom-info-main hover:bg-custom-info-main/4',
      warning: 'text-custom-warning-main hover:bg-custom-warning-main/4',
      inherit: 'text-inherit hover:bg-inherit/4',
    },
  }

  return (
    <button
      type='button'
      className={`flex content-center min-w-16 rounded-sm ${isDisabledStyle} ${alignStyles[align]} ${sizeStyle} ${buttonSize[variant][size]} ${defaultStyles[variant]} ${buttonStyles[variant][color]} ${selectedAnimation} uppercase ${classNameCustom || ''}`}
      // className=''
      {...props}
    >
      {children}
    </button>
  )
}
