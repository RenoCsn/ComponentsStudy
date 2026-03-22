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
  // const colorStyles = {
  //   primary:
  //     'bg-custom-primary-main text-custom-white border-custom-primary-main',
  //   secondary: 'text-custom-secondary-main',
  //   success: 'text-custom-success-main',
  //   error: 'text-custom-error-main',
  //   info: 'text-custom-info-main',
  //   warning: 'text-custom-warning-main',
  //   inherit: 'text-inherit',
  // }

  const alignStyles = {
    center: 'justify-center text-center',
    start: 'justify-start text-start',
    justify: 'text-justify',
    left: 'text-left',
    right: 'text-right',
    end: 'justify-end text-end',
    inherit: 'justify-inherit',
  }

  const isDisabledStyle = isDisabled ? '' : ''

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

  // const variantStyle = {
  //   contained: 'border-none',
  //   outlined: 'bg-transparent text-custom-primary-main border rounded-lg',
  //   text: '',
  // }

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
      className={`flex content-center min-w-16 rounded-sm ${alignStyles[align]} ${isDisabledStyle} ${sizeStyle} ${defaultStyles[variant]} ${buttonStyles[variant][color]} ${paddings[variant]} ${selectedAnimation} uppercase ${classNameCustom || ''}`}
      // className=''
      {...props}
    >
      {children}
    </button>
  )
}
