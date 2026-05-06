import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { IconType } from '../../../utils/types/iconType'

export const ArrowCircleRightIcon: React.FC<IconType> = ({
  color = 'primary',
  size = 'medium',
  isDisabled = false,
  //TODO
  // isAnimated = false,
  // animationStyle = 'simple',
  classNameCustom,
  svgProps,
}: IconType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('fill')

  useEffect(() => {
    setColor(color)
  }, [color, currentColor, setColor])

  const getSize = (
    size: 'small' | 'medium' | 'large' | string,
  ): string | null => {
    const iconSize = {
      small: 'w-5 h-5',
      medium: 'w-6 h-6',
      large: 'w-9 h-9',
    }

    const mappedSize = iconSize[size as keyof typeof iconSize]
    return mappedSize || null
  }

  const sizeGetter = getSize(size)
  const isCustomSize = !sizeGetter
  const customPx = Number(size) * 4
  const customSizePx =
    isCustomSize && Number.isFinite(customPx) ? `${customPx}px` : undefined

  const disabledStyles = isDisabled
    ? 'bg-custom-black/10! fill-custom-black/40! cursor-not-allowed'
    : ''

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 24 24'
      viewBox='0 0 24 24'
      className={`flex content-center ${!isCustomColor ? currentColor : ''} ${!isCustomSize ? sizeGetter : ''} ${disabledStyles} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor ? { fill: currentColor } : {}),
        ...(customSizePx ? { width: customSizePx, height: customSizePx } : {}),
      }}
      {...svgProps}
    >
      <g>
        <rect fill='none' />
      </g>
      <g>
        <path d='M22,12c0-5.52-4.48-10-10-10C6.48,2,2,6.48,2,12s4.48,10,10,10C17.52,22,22,17.52,22,12z M4,12c0-4.42,3.58-8,8-8 c4.42,0,8,3.58,8,8s-3.58,8-8,8C7.58,20,4,16.42,4,12z M16,12l-4,4l-1.41-1.41L12.17,13H8v-2h4.17l-1.59-1.59L12,8L16,12z' />
      </g>
    </svg>
  )
}
