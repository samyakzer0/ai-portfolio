'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import Work from './components/Work'
import About from './components/About'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollIndicator from './components/ScrollIndicator'
import FloatingButton from './components/FloatingButton'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  return (
    <>
      <Loader onComplete={() => setShowLoader(false)} />
      
      <AnimatePresence>
        {!showLoader && (
          <motion.main 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="min-h-screen bg-white dark:bg-black text-black dark:text-white"
          >
            <ScrollIndicator />
            <Navigation />
            <Hero />
            <Work />
            <About />
            <TechStack />
            <Contact />
            <Footer />
            <FloatingButton />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
