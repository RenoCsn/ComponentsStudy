import { useEffect } from 'react'
import { UseColor } from '../../utils/hooks/useColor'
import type { SkeletonType } from '../../utils/types/skeletonType'

export const SkeletonComponent: React.FC<SkeletonType> = ({
  width,
  height,
  color = 'bg-neutral-200',
  isAnimated = true,
  animationStyle = 'pulse',
  variant = 'text',
  classNameCustom,
  children,
  ...props
}: SkeletonType) => {
  const { setColor, currentColor, isCustomColor } = UseColor('bg')

  useEffect(() => {
    setColor(color)
  }, [color, currentColor, setColor])

  const variantStyles = {
    circular: `rounded-full ${!children ? 'w-5 h-5' : ''}`,
    rectangular: `rounded-none ${!children ? 'w-full h-20' : ''}`,
    rounded: `rounded-md ${!children ? 'w-full h-20' : ''}`,
    text: `rounded-sm ${!children ? 'w-full h-4' : ''}`,
  }

  const size = !children ? { width: `${width}rem`, height: `${height}rem` } : {}

  const animationStyles = {
    wave: 'absolute inset-0 -translate-x-full animate-skeleton-wave bg-linear-to-r from-transparent via-custom-white/50 to-transparent',
    pulse: 'animate-pulse',
  }

  const showWave = isAnimated && animationStyle === 'wave'
  return (
    <div
      className={`relative overflow-hidden box-border inline-flex ${variantStyles[variant]} ${currentColor || 'bg-custom-gray-200'} ${isAnimated && !showWave ? animationStyles['pulse'] : 'animate-none'} ${classNameCustom || ''}`}
      style={{
        ...(isCustomColor ? { backgroundColor: currentColor } : {}),
        ...size,
      }}
      {...props}
    >
      <span className='invisible'>{children}</span>
      <span className='pointer-events-none absolute inset-0' />
      {showWave && <span className={`${animationStyles['wave']}`} />}
    </div>
  )
}
