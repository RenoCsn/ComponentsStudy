import { describe, expect, it } from 'vitest'
import { UseColor } from './useColor'
import { act, renderHook } from '@testing-library/react'

describe('useColor', () => {
  it('Should return preset color correctly', () => {
    const color = 'primary'
    const { result } = renderHook(() => UseColor('text'))

    act(() => {
      result.current.setColor(color)
    })

    expect(result.current.currentColor).toBe('text-custom-primary-main')
    expect(result.current.isCustomColor).toBe(false)
  })

  it('Should return hex color', () => {
    const color = '#22ff73'
    const { result } = renderHook(() => UseColor('text'))

    act(() => {
      result.current.setColor(color)
    })

    expect(result.current.currentColor).toBe('#22ff73')
    expect(result.current.isCustomColor).toBe(true)
  })
})
