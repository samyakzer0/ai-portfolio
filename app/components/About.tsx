'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Title and Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-6xl lg:text-9xl font-light text-gradient">
                WHO AM I?
            </h2>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-medium mb-6"></h3>
              
              <motion.button
                whileHover={{ x: 10 }}
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center space-x-2 mb-8"
              >
                <span></span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </motion.button>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              >
                I'm an AI-powered indie builder who turns ideas into MVPs in days using tools like ChatGPT, Cursor IDE, and Vercel. I ideate, prompt, build, and ship — all solo — blending product thinking with AI automation.
              </motion.p>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8"
              >
                I'm dedicated to crafting intelligent AI systems and automation solutions that
                seamlessly integrate with business processes and drive innovation forward.
              </motion.p>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex space-x-6"
              >
                {['GitHub', 'LinkedIn', 'Twitter'].map((social, index) => (
                  <motion.a
                    key={social}
                    href={`https://${social.toLowerCase()}.com`}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-medium border border-gray-300 dark:border-gray-700 px-4 py-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    {social}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right - Image with fallback */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ duration: 0.3 }}
              className="w-80 h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center"
            >
              
              {/* Uncomment below when you add your photo to public folder */}
              { 
              <Image
                src="/samyak-photo.jpg"
                alt="Samyak - AI Builder"
                width={320}
                height={400}
                className="w-full h-full object-cover"
              />
              }
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
