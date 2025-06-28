'use client'

import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl lg:text-8xl font-light text-gradient">
                LET'S CONNECT
            </h2>
          </motion.div>

          {/* Right - Contact Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-2xl lg:text-3xl font-light leading-relaxed"
            >
              Ready to build the future with AI? 
            </motion.h3>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17 
                }}
                className="bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 magnetic-button"
              >
                Get in Touch
              </motion.button>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="pt-8 border-t border-gray-200 dark:border-gray-800"
            >
              <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Available For Work
              </div>
              
              <div className="space-y-3">
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ x: 10 }}
                  className="flex items-center text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  +91702473XXX
                </motion.a>
                
                <motion.a
                  href="mailto:hello@samyak.ai"
                  whileHover={{ x: 10 }}
                  className="flex items-center text-lg hover:text-gray-600 dark:hover:text-gray-400 transition-colors"
                >
                  hello@samyak.ai
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
