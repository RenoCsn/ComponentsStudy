import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { ProgressionBarLoadingType } from '../../../utils/types/loadingsType'
import type { ColorType } from '../../../utils/types/colorsType'

export const ProgressBarLoadingComponent: React.FC<
  ProgressionBarLoadingType
> = ({
  color = 'primary',
  size = 'medium',
  speed = 2,
  backgroundColor = 'primary',
  isLoading = true,
  isReverse = false,
  hasProgressValue = false,
  progressValue = 0,
  hasLabel = false,
  label,
  hasBackground = true,
  labelPosition = 'right',
  classNameCustom,
  children,
}: ProgressionBarLoadingType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('bg')
  const {
    setColor: setColorBackground,
    currentColor: currentColorBackground,
    isCustomColor: isCustomColorBackground,
  } = UseColor('bg')

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  useEffect(() => {
    setColorBackground(backgroundColor)
  }, [backgroundColor, setColorBackground])

  const getSize = (
    size: 'small' | 'medium' | 'large' | string,
  ): string | null => {
    const sizeStyles = {
      small: 'h-1',
      medium: 'h-2',
      large: 'h-3',
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
    top: 'inline-flex w-full flex-col items-stretch gap-2 text-center',
    bottom:
      'inline-flex w-full flex-col-reverse items-stretch gap-2 text-center',
    left: 'inline-flex w-full flex-row items-center gap-2',
    right: 'inline-flex w-full flex-row-reverse items-center gap-2',
  }

  const showLabel = hasLabel && hasProgressValue
  const displayValue = Math.min(100, Math.max(0, progressValue ?? 0))

  const mappedColor: Record<ColorType, string> = {
    primary: 'var(--color-custom-primary-main)',
    secondary: 'var(--color-custom-secondary-main)',
    success: 'var(--color-custom-success-main)',
    error: 'var(--color-custom-error-main)',
    info: 'var(--color-custom-info-main)',
    warning: 'var(--color-custom-warning-main)',
  }

  const resolveColor = (
    colorValue: ColorType | string,
    isCustom: boolean,
    current: string,
  ): string => {
    if (isCustom) return current
    return mappedColor[colorValue as ColorType] ?? current
  }

  const resolvedColor = resolveColor(color, isCustomColor, currentColor)
  const resolvedBackgroundColor = resolveColor(
    backgroundColor,
    isCustomColorBackground,
    currentColorBackground,
  )

  const customColorBackgroundStyle = {
    ...(isCustomColorBackground
      ? { backgroundColor: resolvedBackgroundColor }
      : {}),
  }

  const customColorProgressStyle = {
    ...(isCustomColor ? { backgroundColor: resolvedColor } : {}),
  }

  const renderNoValueProgressBar = () => (
    <div
      className={`relative w-full overflow-hidden rounded-full ${!isCustomSize ? sizeGetter : ''}`}
      style={{ ...(customSizePx ? { height: customSizePx } : {}) }}
    >
      {hasBackground && (
        <div
          className={`absolute inset-0 rounded-full opacity-25 ${!isCustomColorBackground ? currentColorBackground : ''}`}
          style={customColorBackgroundStyle}
        />
      )}
      {isLoading && (
        <div
          className={`absolute inset-y-0 w-1/3 rounded-full animate-progress-indeterminate ${!isCustomColor ? currentColor : ''} ${classNameCustom || ''}`}
          style={{
            ...customColorProgressStyle,
            animationDuration: `${speed}s`,
            animationDirection: isReverse ? 'reverse' : 'normal',
          }}
        />
      )}
    </div>
  )

  const renderHasValueProgressBar = () => (
    <div
      className={`relative w-full overflow-hidden rounded-full ${!isCustomSize ? sizeGetter : ''}`}
      style={{ ...(customSizePx ? { height: customSizePx } : {}) }}
    >
      {hasBackground && (
        <div
          className={`absolute inset-0 rounded-full opacity-25 ${!isCustomColorBackground ? currentColorBackground : ''}`}
          style={customColorBackgroundStyle}
        />
      )}
      <div
        className={`absolute inset-y-0 left-0 overflow-hidden rounded-full transition-[width] duration-200 ease-out ${!isCustomColor ? currentColor : ''} ${classNameCustom || ''}`}
        style={{
          width: `${displayValue}%`,
          ...customColorProgressStyle,
          animationDuration: `${speed}s`,
          animationDirection: isReverse ? 'reverse' : 'normal',
        }}
      >
        {isLoading && (
          <span className='absolute inset-0 -translate-x-full animate-skeleton-wave bg-linear-to-r from-transparent via-custom-white/50 to-transparent' />
        )}
      </div>
    </div>
  )

  const progressBar = hasProgressValue
    ? renderHasValueProgressBar()
    : renderNoValueProgressBar()

  return (
    <div className={`${positionStyle[labelPosition]}`}>
      {children}
      {showLabel && (
        <span className='shrink-0 tabular-nums text-sm'>
          {label} {displayValue}%
        </span>
      )}
      {progressBar}
    </div>
  )
}
