import { useEffect, useId } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { InputType } from '../../../utils/types/inputType'
import * as Icons from '../../Icons'

export const InputComponent: React.FC<InputType> = ({
  color = 'primary',
  size = 'medium',
  variant = 'outlined',
  isDisabled = false,
  isFullWidth = false,
  isError = false,
  label,
  helperText,
  errorText,
  iconName = undefined,
  iconPosition = 'start',
  classNameCustom,
  // id,
  ...props
}: InputType) => {
  const generatedId = useId()
  const inputId = props.id ?? generatedId
  const { setColor, currentColor, isCustomColor } = UseColor('border')

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  const IconComponent = iconName ? Icons[iconName] : null

  const sizeStyles = {
    small: 'text-xs py-1 px-2',
    medium: 'text-sm py-2 px-3',
    large: 'text-base py-3 px-4',
  }

  const variantStyles = {
    outlined: 'bg-transparent border rounded-sm',
    filled: 'border-0 border-b rounded-t-sm bg-custom-black/5',
    standard: 'border-0 border-b bg-transparent rounded-none',
  }

  const stateStyles = isDisabled
    ? 'opacity-50 cursor-not-allowed'
    : 'cursor-text'

  const errorStyles = isError
    ? 'border-custom-error-main text-custom-error-main'
    : ''

  const widthStyle = isFullWidth ? 'w-full' : 'w-auto'

  const borderColorClass = isError ? '' : isCustomColor ? '' : currentColor

  const iconAbsolutePos = {
    start: 'left-2',
    end: 'right-2',
  }

  const inputIconPadding = {
    start: 'pl-9',
    end: 'pr-9',
  }

  const inputWrapperStyle = isFullWidth ? 'w-full' : 'w-fit self-start'

  return (
    <div className={`flex flex-col gap-1 ${widthStyle}`}>
      {label ? (
        <label htmlFor={inputId} className='text-sm text-custom-black'>
          {label}
        </label>
      ) : null}
      <div className={`relative ${inputWrapperStyle}`}>
        {IconComponent ? (
          <span
            className={`absolute top-1/2 -translate-y-1/2 ${iconAbsolutePos[iconPosition]}`}
          >
            <IconComponent size={size} color={color} isDisabled={isDisabled} />
          </span>
        ) : null}
        <input
          id={inputId}
          disabled={isDisabled}
          className={`outline-none focus:outline-offset-2 focus:outline-2 ${IconComponent ? inputIconPadding[iconPosition] : ''} ${sizeStyles[size]} ${variantStyles[variant]} ${stateStyles} ${errorStyles} ${borderColorClass} ${widthStyle} ${classNameCustom || ''}`}
          style={
            isCustomColor && !isError
              ? { borderColor: currentColor as string }
              : undefined
          }
          {...props}
        />
      </div>
      {isError && errorText ? (
        <p className='text-xs text-custom-error-main'>{errorText}</p>
      ) : helperText ? (
        <p className='text-xs text-custom-black/60'>{helperText}</p>
      ) : null}
    </div>
  )
}
