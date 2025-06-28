'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <div className="text-sm text-gray-600 dark:text-gray-400">
            Designed & Developed by{' '}
            <motion.a
              href="https://samyak.ai"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="underline hover:text-black dark:hover:text-white transition-colors"
            >
              Samyak
            </motion.a>
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            All rights reserved, SAMYAK ©2025
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
