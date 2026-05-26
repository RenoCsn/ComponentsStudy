import { useEffect, useState } from 'react'
import { UseColor } from '../../../utils/hooks/useColor'
import type { DotLoadingType } from '../../../utils/types/loadingsType'

export const DotsLoadingComponent: React.FC<DotLoadingType> = ({
  color = 'primary',
  size = 'medium',
  isLoading = true,
  maxDots = 3,
  intervalMs = 400,
  children,
  classNameCustom,
}: DotLoadingType) => {
  const [dotCount, setDotCount] = useState(0)
  const { setColor, currentColor, isCustomColor } = UseColor('text')

  useEffect(() => {
    setColor(color)
  }, [color, currentColor, setColor])

  useEffect(() => {
    if (!isLoading) {
      setDotCount(0)
      return
    }

    const id = setInterval(() => {
      setDotCount((count) => (count >= maxDots ? 0 : count + 1))
    }, intervalMs)

    return () => clearInterval(id)
  }, [isLoading, maxDots, intervalMs])

  const renderTextDots = () => (
    <span
      className='inline-block text-left tabular-nums'
      style={{ width: `${maxDots}ch` }}
      aria-hidden
    >
      {isLoading ? '.'.repeat(dotCount) : ''}
    </span>
  )

  const getSize = (
    size: 'small' | 'medium' | 'large' | string,
  ): string | null => {
    const sizeStyles = {
      small: 'text-xs',
      medium: 'text-sm',
      large: 'text-base',
    }

    const mappedSize = sizeStyles[size as keyof typeof sizeStyles]
    return mappedSize || null
  }

  const sizeGetter = getSize(size)
  const isCustomSize = !sizeGetter
  const customPx = Number(size) * 4
  const customSizePx =
    isCustomSize && Number.isFinite(customPx) ? `${customPx}px` : undefined

  return (
    <span
      className={`inline-flex items-baseline ${!isCustomColor ? currentColor : ''} ${!isCustomSize ? sizeGetter : ''} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor ? { color: currentColor } : {}),
        ...(customSizePx ? { fontSize: customSizePx } : {}),
      }}
    >
      {children != null && children !== '' && <span>{children}</span>}
      {renderTextDots()}
    </span>
  )
}
