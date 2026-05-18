import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { IconType } from '../../../utils/types/iconType'

export const AddIcon: React.FC<IconType> = ({
  color = 'primary',
  size = 'medium',
  isDisabled = false,
  isAnimated = false,
  animationStyle = 'spin',
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

  const animation = {
    spin: 'animate-spin',
    flipHorizontal:
      'animate-icon-flip-out-horizontal hover:animate-icon-flip-in-horizontal',
    flipVertical:
      'animate-icon-flip-out-vertical hover:animate-icon-flip-in-vertical',
    expand: 'transform hover:scale-110 hover:tracking-normal',
    decrease: 'transform hover:scale-90',
  }

  const selectedAnimation = isAnimated
    ? animation[animationStyle]
    : 'animate-none'

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 24 24'
      className={`flex content-center ${!isCustomColor ? currentColor : ''} ${!isCustomSize ? sizeGetter : ''} ${disabledStyles} ${selectedAnimation} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor ? { fill: currentColor } : {}),
        ...(customSizePx ? { width: customSizePx, height: customSizePx } : {}),
      }}
      {...svgProps}
    >
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z' />
    </svg>
  )
}
