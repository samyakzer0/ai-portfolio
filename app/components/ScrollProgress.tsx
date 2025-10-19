'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  // Always visible for better debugging

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0"
      style={{
        height: '8px',
        background: 'rgba(0, 0, 0, 0.1)',
        transformOrigin: '0%',
        zIndex: 9999
      }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
        style={{
          scaleX,
          transformOrigin: '0%',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(147, 51, 234, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)'
        }}
      />
    </motion.div>
  )
}