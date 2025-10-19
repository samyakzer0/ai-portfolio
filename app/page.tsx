'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Loader from './components/Loader'
import Hero from './components/Hero'
import StaggeredMenu from './components/StaggeredMenu'
import Work from './components/Work'
import About from './components/About'
import TechStack from './components/TechStack'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function Home() {
  const [showLoader, setShowLoader] = useState(true)

  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#hero' },
    { label: 'Work', ariaLabel: 'View my work', link: '#work' },
    { label: 'About', ariaLabel: 'Learn about me', link: '#about' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com' },
    { label: 'LinkedIn', link: 'https://linkedin.com' },
    { label: 'Twitter', link: 'https://twitter.com' }
  ];

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
            <StaggeredMenu
              position="right"
              items={menuItems}
              socialItems={[
                { label: 'GitHub', link: 'https://github.com/samyakzer0', icon: 'github' },
                { label: 'LinkedIn', link: 'https://linkedin.com/in/samyakzer0', icon: 'linkedin' },
                { label: 'Twitter', link: 'https://x.com/samyceo', icon: 'twitter' }
              ]}
              displaySocials={true}
              displayItemNumbering={true}
              menuButtonColor="#ffffff"
              openMenuButtonColor="#ffffff"
              changeMenuColorOnOpen={true}
              colors={['#000000', '#1a1a1a']}
              accentColor="#60a5fa"
              isFixed={true}
            />

            <ScrollProgress />
            <Hero />
            <Work />
            <About />
            <TechStack />
            <Contact />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  )
}
