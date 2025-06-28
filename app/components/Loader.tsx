'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const duration = 3000 // 3 seconds total
    const interval = 16 // ~60fps
    const increment = 1 / (duration / interval)

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment
        if (newProgress >= 1) {
          clearInterval(timer)
          setTimeout(() => {
            setIsVisible(false)
            setTimeout(onComplete, 500) // Wait for exit animation
          }, 300)
          return 1
        }
        return newProgress
      })
    }, interval)

    return () => clearInterval(timer)
  }, [onComplete])

  if (!isVisible) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-white dark:bg-black flex flex-col items-center justify-center"
    >
      <div className="text-center space-y-8">
        {/* Main logo/name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-2"
        >
          <h1 className="text-6xl lg:text-8xl font-light">SAMYAK</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">AI Builder</p>
        </motion.div>

        {/* Progress counter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="space-y-4"
        >
          <div className="text-4xl lg:text-6xl font-mono font-light tabular-nums">
            {progress.toFixed(3)}
          </div>
          
          {/* Progress bar */}
          <div className="w-64 h-0.5 bg-gray-200 dark:bg-gray-800 mx-auto rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-black dark:bg-white rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress * 100}%` }}
              transition={{ duration: 0.1, ease: "easeOut" }}
            />
          </div>
          
          {/* Loading text */}
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider"
          >
            Initializing AI systems...
          </motion.p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute inset-0 pointer-events-none"
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-black dark:bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}
