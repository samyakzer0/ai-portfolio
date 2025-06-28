'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onNavigate: (section: string) => void
}

export default function MobileMenu({ isOpen, onClose, onNavigate }: MobileMenuProps) {
  const menuItems = ['work', 'about', 'contact']

  const handleNavigate = (section: string) => {
    onNavigate(section)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-white dark:bg-black border-l border-gray-200 dark:border-gray-800 z-50 md:hidden"
          >
            <div className="p-6">
              <motion.button
                onClick={onClose}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="mb-8 ml-auto block text-2xl"
              >
                ×
              </motion.button>
              
              <nav className="space-y-6">
                {menuItems.map((item, index) => (
                  <motion.button
                    key={item}
                    onClick={() => handleNavigate(item)}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block text-2xl font-light capitalize hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                  >
                    {item}
                  </motion.button>
                ))}
              </nav>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800"
              >
                <div className="text-sm text-gray-600 dark:text-gray-400">
                
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
