import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { IconType } from '../../../utils/types/iconType'

export const ThumbUpIcon: React.FC<IconType> = ({
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
      viewBox='0 0 24 24'
      className={`flex content-center ${!isCustomColor ? currentColor : ''} ${!isCustomSize ? sizeGetter : ''} ${disabledStyles} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor ? { fill: currentColor } : {}),
        ...(customSizePx ? { width: customSizePx, height: customSizePx } : {}),
      }}
      {...svgProps}
    >
      <path d='M0 0h24v24H0V0zm0 0h24v24H0V0z' fill='none' />
      <path d='M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z' />
    </svg>
  )
}
