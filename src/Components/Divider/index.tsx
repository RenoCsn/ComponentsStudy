import { useEffect } from 'react'
import { UseColor } from '../../utils/hooks/useColor'
import type { DividerType } from '../../utils/types/dividerType'

type SizePreset = 'small' | 'medium' | 'large' | string

const thickness: Record<'small' | 'medium' | 'large', number> = {
  small: 1,
  medium: 4,
  large: 8,
}

const borderStyleMap = {
  solid: 'solid',
  dotted: 'dotted',
  dashed: 'dashed',
  double: 'double',
} as const

const resolveSizePx = (size: SizePreset): number => {
  if (size in thickness) {
    return thickness[size as keyof typeof thickness]
  }

  const customPx = Number(size) * 4
  return Number.isFinite(customPx) ? customPx : thickness.small
}

const resolveLineColor = (
  isCustomColor: boolean,
  currentColor: string,
): string => {
  if (isCustomColor) return currentColor

  const cssVarMap: Record<string, string> = {
    'border-custom-primary-main': 'var(--color-custom-primary-main)',
    'border-custom-secondary-main': 'var(--color-custom-secondary-main)',
    'border-custom-success-main': 'var(--color-custom-success-main)',
    'border-custom-error-main': 'var(--color-custom-error-main)',
    'border-custom-info-main': 'var(--color-custom-info-main)',
    'border-custom-warning-main': 'var(--color-custom-warning-main)',
  }

  return cssVarMap[currentColor] ?? currentColor
}

type DividerStyleOptions = {
  isHorizontal: boolean
  thicknessPx: number
  lineColor: string
  borderStyle: NonNullable<DividerType['borderStyle']>
  hasBlurry: boolean
}

const buildLineStyle = ({
  isHorizontal,
  thicknessPx,
  lineColor,
  borderStyle,
  hasBlurry,
}: DividerStyleOptions): React.CSSProperties => {
  const length = '100%'

  if (hasBlurry) {
    return isHorizontal
      ? {
          width: length,
          height: thicknessPx,
          background: `linear-gradient(to right, transparent, ${lineColor} 25%, ${lineColor} 75%, transparent)`,
        }
      : {
          width: thicknessPx,
          background: `linear-gradient(to bottom, transparent, ${lineColor} 25%, ${lineColor} 75%, transparent)`,
        }
  }

  if (isHorizontal) {
    return {
      width: length,
      borderTop: `${thicknessPx}px ${borderStyleMap[borderStyle]} ${lineColor}`,
    }
  }

  return {
    width: thicknessPx,
    borderLeft: `${thicknessPx}px ${borderStyleMap[borderStyle]} ${lineColor}`,
    boxSizing: 'border-box',
  }
}

export const DividerComponent: React.FC<DividerType> = ({
  color = '#0000001f',
  childrenAlign = 'center',
  hasChildren = false,
  size = 'small',
  orientation = 'horizontal',
  borderStyle = 'solid',
  hasBlurry = false,
  isFlexItem = false,
  variant = 'fullWidth',
  children,
  classNameCustom,
  ...props
}: DividerType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('border')

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  const isHorizontal = orientation === 'horizontal'
  const thicknessPx = resolveSizePx(size)
  const lineColor = resolveLineColor(isCustomColor, currentColor)
  const showMiddle = hasChildren || variant === 'middle'

  const variantClasses = {
    fullWidth: '',
    inset: isHorizontal
      ? 'ml-18 w-[calc(100%-4.5rem)]!'
      : 'mt-18 self-stretch! h-[calc(100%-4.5rem)]!',
    middle: '',
  }

  const renderLine = (extraClass = '') => (
    <div
      className={`shrink-0 ${extraClass}`}
      style={buildLineStyle({
        isHorizontal,
        thicknessPx,
        lineColor,
        borderStyle,
        hasBlurry,
      })}
      {...props}
    />
  )

  const childrenAlignClasses = {
    center: 'justify-center',
    left: 'justify-start',
    right: 'justify-end',
  }

  const renderMiddleLabel = () =>
    children ? (
      <span className='shrink-0 px-2 text-sm' style={{ color: lineColor }}>
        {children}
      </span>
    ) : null

  const renderMiddleContent = () => {
    if (childrenAlign === 'left') {
      return (
        <>
          {renderMiddleLabel()}
          {renderLine('min-w-0 flex-1')}
        </>
      )
    }

    if (childrenAlign === 'right') {
      return (
        <>
          {renderLine('min-w-0 flex-1')}
          {renderMiddleLabel()}
        </>
      )
    }

    return (
      <>
        {renderLine('min-w-0 flex-1')}
        {renderMiddleLabel()}
        {renderLine('min-w-0 flex-1')}
      </>
    )
  }

  if (showMiddle) {
    return (
      <div
        className={`flex w-full ${isHorizontal ? 'flex-row items-center' : 'flex-col items-center self-stretch'} ${childrenAlignClasses[childrenAlign]} ${variantClasses[variant]} gap-4 ${classNameCustom || ''}`}
        style={
          !isHorizontal
            ? {
                width: thicknessPx,
                alignSelf: 'stretch',
                height: '100%',
              }
            : undefined
        }
      >
        {renderMiddleContent()}
      </div>
    )
  }

  if (isHorizontal) {
    return (
      <div
        className={`w-full shrink-0 ${variantClasses[variant]} ${classNameCustom || ''}`}
      >
        {renderLine('w-full')}
      </div>
    )
  }

  return (
    <div
      className={`shrink-0 ${isFlexItem ? 'min-h-0' : ''} ${variantClasses[variant]} ${classNameCustom || ''}`}
      style={buildLineStyle({
        isHorizontal: false,
        thicknessPx,
        lineColor,
        borderStyle,
        hasBlurry,
      })}
    />
  )
}
