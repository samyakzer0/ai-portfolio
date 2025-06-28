'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function FloatingButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)"
          }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToContact}
          className="fixed bottom-8 right-8 z-40 bg-black dark:bg-white text-white dark:text-black w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300"
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            💬
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  )
}
