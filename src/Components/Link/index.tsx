import { useEffect } from 'react'
import { UseColor } from '../../utils/hooks/useColor'
import type { LinkType } from '../../utils/types/linkType'

const textDecorationStyleMap = {
  solid: 'decoration-solid',
  dotted: 'decoration-dotted',
  dashed: 'decoration-dashed',
  double: 'decoration-double',
} as const

export const LinkComponent: React.FC<LinkType> = ({
  color = 'primary',
  textDecoration = 'solid',
  textDecorationColor = 'primary',
  textDecorationThickness = 'small',
  isAnimated = false,
  animationStyle = 'underlineDown',
  children,
  classNameCustom,
  href,
  ...props
}: LinkType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('text')
  const {
    setColor: setDecorationColor,
    currentColor: currentDecorationColor,
    isCustomColor: isCustomDecorationColor,
  } = UseColor('decoration')

  useEffect(() => {
    setColor(color)
  }, [color, setColor])

  useEffect(() => {
    setDecorationColor(textDecorationColor)
  }, [textDecorationColor, setDecorationColor])

  const getThickness = (
    width: 'small' | 'medium' | 'large' | string,
  ): string | null => {
    const thicknessTailwind = {
      small: 'decoration-1',
      medium: 'decoration-2',
      large: 'decoration-4',
    }

    const mappedThickness =
      thicknessTailwind[width as keyof typeof thicknessTailwind]
    return mappedThickness || null
  }

  const thicknessGetter = getThickness(textDecorationThickness)
  const isCustomThickness = !thicknessGetter
  const customPx = Number(textDecorationThickness) * 4
  const customThicknessPx =
    isCustomThickness && Number.isFinite(customPx) ? `${customPx}px` : undefined

  const animation = {
    underlineDown:
      'underline-offset-1 transition-[text-underline-offset] duration-700 ease-in-out hover:underline-offset-[16px]',
  }

  const selectedAnimation = isAnimated
    ? animation[animationStyle]
    : 'animate-none'

  const customVisitedColor = currentColor.replace('-main', '-light')
  const customVisitedDecorationColor = currentDecorationColor.replace(
    '-main',
    '-light',
  )
  const visitedColorClass = isCustomColor
    ? 'link-custom-color link-custom-visited-color'
    : `visited:${customVisitedColor}`
  const visitedDecorationClass = isCustomDecorationColor
    ? 'link-custom-decoration-color link-custom-visited-decoration'
    : `visited:${customVisitedDecorationColor}`

  return (
    <a
      href={href}
      className={`flex underline ${selectedAnimation} ${!isCustomColor ? currentColor : ''} ${!isCustomDecorationColor ? currentDecorationColor : ''} ${visitedColorClass} ${visitedDecorationClass} ${textDecorationStyleMap[textDecoration]} ${!isCustomThickness ? thicknessGetter : ''} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor
          ? ({ '--link-color': currentColor } as React.CSSProperties)
          : {}),
        ...(isCustomDecorationColor
          ? ({
              '--link-decoration-color': currentDecorationColor,
            } as React.CSSProperties)
          : {}),
        ...(customThicknessPx
          ? { textDecorationThickness: customThicknessPx }
          : {}),
      }}
      {...props}
    >
      {children}
    </a>
  )
}
