import { useState, useEffect } from 'react'
import { useMediaQuery } from './useMediaQuery'

export const useCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState('default')
  const isDesktop = useMediaQuery('(min-width: 768px)')

  useEffect(() => {
    if (!isDesktop) return

    const mouseMove = (event) => {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [isDesktop])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      opacity: 1,
    },
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "white",
      mixBlendMode: "difference",
    }
  }

  const textEnter = () => isDesktop && setCursorVariant('text')
  const textLeave = () => isDesktop && setCursorVariant('default')

  return { mousePosition, cursorVariant, variants, textEnter, textLeave, isDesktop }
}

