'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { WavyBackground } from './ui/wavy-background'

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen relative">
      <WavyBackground
        containerClassName="min-h-screen"
        className="px-6 pt-20"
        backgroundFill="rgba(0, 0, 0, 0.8)"
        waveOpacity={0.3}
        blur={8}
        speed="fast"
        colors={["#ffffff", "#f8fafc", "#e2e8f0", "#cbd5e1", "#94a3b8"]}
      >
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
                
              </motion.div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <h1 className="text-7xl lg:text-8xl font-light mb-4 text-white">
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
                  
      
                </motion.div>

                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-lg text-gray-300 max-w-md leading-relaxed"
                >
                  Hello, I'm an AI Builder specializing in intelligent systems and automation with years of
                  expertise — creating the future of technology. Let's build something amazing!
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Content - Large AI Text */}
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
                className="text-6xl lg:text-9xl font-light text-white leading-none"
                style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
              >
            
              </motion.h2>
            </motion.div>
          </div>
        </div>
      </WavyBackground>
    </section>
  )
}
