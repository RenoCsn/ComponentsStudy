import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { CircleLoadingType } from '../../../utils/types/loadingsType'
import type { ColorType } from '../../../utils/types/colorsType'

export const CircleLoadingComponent: React.FC<CircleLoadingType> = ({
  color = 'primary',
  size = 'medium',
  speed = 1,
  isLoading = true,
  thickness = 4,
  hasValue = false,
  value = 0,
  hasLabel = false,
  label,
  hasBackground = false,
  labelPosition = 'inside',
  classNameCustom,
}: CircleLoadingType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('text')

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  const getSize = (
    size: 'small' | 'medium' | 'large' | string,
  ): string | null => {
    const sizeStyles = {
      small: 'w-6 h-6 text-xs',
      medium: 'w-8 h-8 text-sm',
      large: 'w-10 h-10 text-base',
    }

    const mappedSize = sizeStyles[size as keyof typeof sizeStyles]
    return mappedSize || null
  }

  const sizeGetter = getSize(size)
  const isCustomSize = !sizeGetter
  const customPx = Number(size) * 4
  const customSizePx =
    isCustomSize && Number.isFinite(customPx) ? `${customPx}px` : undefined

  const positionStyle = {
    inside: 'relative inline-flex',
    top: 'inline-flex flex-col items-center gap-1',
    bottom: 'inline-flex flex-col-reverse items-center gap-1',
    left: 'inline-flex flex-row items-center gap-2',
    right: 'inline-flex flex-row-reverse items-center gap-2',
  }

  const showLabel = hasLabel && hasValue
  const displayValue = Math.min(100, Math.max(0, value ?? 0))

  const defaultBackground = 'var(--color-custom-gray-200)'

  const mappedColor: Record<ColorType, string> = {
    primary: 'var(--color-custom-primary-main)',
    secondary: 'var(--color-custom-secondary-main)',
    success: 'var(--color-custom-success-main)',
    error: 'var(--color-custom-error-main)',
    info: 'var(--color-custom-info-main)',
    warning: 'var(--color-custom-warning-main)',
  }

  const resolveColor = (
    color: ColorType | string,
    isCustomColor: boolean,
    currentColor: string,
  ): string => {
    if (isCustomColor) return currentColor
    return mappedColor[color as ColorType] ?? currentColor
  }

  const resolvedColor = resolveColor(color, isCustomColor, currentColor)

  const renderInfiniteRing = () => (
    <div
      className={`relative ${!isCustomSize ? sizeGetter : ''}`}
      style={{
        ...(customSizePx ? { width: customSizePx, height: customSizePx } : {}),
      }}
    >
      {hasBackground && (
        <div
          className='absolute inset-0 rounded-full box-border'
          style={{
            borderWidth: thickness,
            borderStyle: 'solid',
            borderColor: defaultBackground,
          }}
        />
      )}
      <div
        className={`absolute inset-0 rounded-full box-border ${isLoading ? 'animate-spin' : ''}`}
        style={{
          borderWidth: thickness,
          borderStyle: 'solid',
          borderColor: 'transparent',
          borderTopColor: resolvedColor,
          animationDuration: `${speed}s`,
        }}
      />
    </div>
  )

  const renderFiniteRing = () => (
    <div
      className={`relative ${!isCustomSize ? sizeGetter : ''}`}
      style={{
        ...(customSizePx ? { width: customSizePx, height: customSizePx } : {}),
      }}
    >
      {hasBackground && (
        <div
          className='absolute inset-0 rounded-full box-border'
          style={{
            borderWidth: thickness,
            borderStyle: 'solid',
            borderColor: defaultBackground,
          }}
        />
      )}
      <div
        className={`absolute inset-0 rounded-full transition-[background] duration-200 ease-out ${isLoading ? 'animate-spin' : ''}`}
        style={{
          background: `conic-gradient(from -90deg, ${resolvedColor} ${displayValue}%, ${hasBackground ? defaultBackground : 'transparent'} ${displayValue}%)`,
          animationDuration: `${speed}s`,
        }}
      />
      <div
        className='absolute rounded-full bg-custom-white'
        style={{ inset: thickness }}
      />
      {showLabel && labelPosition === 'inside' && (
        <span
          className={`absolute inset-0 z-10 flex items-center justify-center tabular-nums ${!isCustomSize ? sizeGetter : ''}`}
          style={{
            ...(customSizePx
              ? { width: customSizePx, height: customSizePx }
              : {}),
          }}
        >
          {label} {displayValue}%
        </span>
      )}
    </div>
  )

  const ring = hasValue ? renderFiniteRing() : renderInfiniteRing()

  const labelOutside = showLabel && labelPosition !== 'inside'

  return (
    <div className={`${positionStyle[labelPosition]} ${classNameCustom || ''}`}>
      {labelOutside && (
        <span
          className={`tabular-nums ${!isCustomSize ? sizeGetter : ''}`}
          style={{
            ...(customSizePx ? { fontSize: '18px' } : {}),
          }}
        >
          {label} {displayValue}%
        </span>
      )}
      {ring}
    </div>
  )
}
