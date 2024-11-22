// import React from 'react'
import { motion } from 'framer-motion'
import { useCursor } from '../hooks/useCursor'

const CursorAnimation = () => {
  const { cursorVariant, variants, isDesktop } = useCursor()

  if (!isDesktop) {
    return null
  }

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28
      }}
      style={{
        position: 'fixed',
        pointerEvents: 'none',
        zIndex: 9999,
        height: 32,
        width: 32,
        backgroundColor: 'white',
        borderRadius: '50%',
        mixBlendMode: 'difference',
      }}
    />
  )
}

export default CursorAnimation

