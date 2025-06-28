'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="w-20 h-20 rounded-full overflow-hidden"
            >
              <Image

                src="/samyak-photo.jpg"
                alt="Profile Picture"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <h1 className="text-7xl lg:text-8xl font-light mb-4">
                <motion.span
                  className="block overflow-hidden"
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1, ease: [0.215, 0.61, 0.355, 1] }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  SAMYAK
                </motion.span>
              </h1>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="flex items-center space-x-4 mb-6"
              >
                <div className="text-sm font-mono text-gray-600 dark:text-gray-400">
                  hello@samyak.ai
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-xs px-3 py-1 border border-gray-300 dark:border-gray-700 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                >
                  Copy to Clipboard
                </motion.button>
              </motion.div>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-md leading-relaxed"
              >
                Hello, I'm an AI Builder specializing in intelligent systems and automation with years of
                expertise — creating the future of technology. Let's build something amazing!
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Content - Large YASKUMI Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <motion.h2
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
              className="text-6xl lg:text-9xl font-light text-gradient leading-none"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >

            </motion.h2>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
