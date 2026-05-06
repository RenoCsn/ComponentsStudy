import { useEffect } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { IconType } from '../../../utils/types/iconType'

export const RemoveIcon: React.FC<IconType> = ({
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
      <path d='M0 0h24v24H0V0z' fill='none' />
      <path d='M19 13H5v-2h14v2z' />
    </svg>
  )
}
