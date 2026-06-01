import { useEffect, useState } from 'react'
import type { ColorType } from '../types/colorsType'

type useColorProps = {
  setColor: React.Dispatch<React.SetStateAction<ColorType | string>>
  currentColor: ColorType | string
  isCustomColor: boolean
}

type prefixType = 'text' | 'fill' | 'bg' | 'border'

export const UseColor = (prefix: prefixType): useColorProps => {
  const [color, setColor] = useState<ColorType | string>('')
  const [currentColor, setCurrentColor] = useState<ColorType | string>('')
  const [isCustomColor, setIsCustomColor] = useState<boolean>(false)

  useEffect(() => {
    const colorGetter = getColor(color)

    if (!colorGetter) {
      setIsCustomColor(true)
    } else {
      setIsCustomColor(false)
    }

    const styleColor = !colorGetter ? color : ''

    setCurrentColor(colorGetter || styleColor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [color, currentColor])

  const getColor = (color: ColorType | string): string | null => {
    const colorStyles = {
      primary: `${prefix}-custom-primary-main`,
      secondary: `${prefix}-custom-secondary-main`,
      success: `${prefix}-custom-success-main`,
      error: `${prefix}-custom-error-main`,
      info: `${prefix}-custom-info-main`,
      warning: `${prefix}-custom-warning-main`,
    }

    const mappedColor = colorStyles[color as keyof typeof colorStyles]

    return mappedColor || null
  }

  return { setColor, currentColor, isCustomColor }
}
