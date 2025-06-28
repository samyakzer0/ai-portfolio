'use client'

import { useEffect, useState, useRef } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([])
  const [isDark, setIsDark] = useState(false)
  const idRef = useRef(0)

  useEffect(() => {
    // Check for dark mode preference
    const checkDarkMode = () => {
      setIsDark(
        document.documentElement.classList.contains('dark') ||
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    }

    checkDarkMode()

    // Listen for changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', checkDarkMode)

    return () => {
      mediaQuery.removeEventListener('change', checkDarkMode)
    }
  }, [])

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      
      // Add to trail
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: idRef.current++ }]
        // Keep only last 15 points
        return newTrail.slice(-15)
      })
    }

    window.addEventListener('mousemove', updatePosition)
    return () => window.removeEventListener('mousemove', updatePosition)
  }, [])

  // Remove old trail points
  useEffect(() => {
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(1))
    }, 50)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor dot */}
      <div
        className={`fixed w-3 h-3 rounded-full transition-transform duration-100 ${
          isDark ? 'bg-white' : 'bg-black'
        }`}
        style={{
          left: position.x - 6,
          top: position.y - 6,
          transform: 'scale(1)',
        }}
      />
      
      {/* Trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className={`fixed rounded-full transition-all duration-300 ${
            isDark ? 'bg-white' : 'bg-black'
          }`}
          style={{
            left: point.x - (4 - index * 0.2),
            top: point.y - (4 - index * 0.2),
            width: Math.max(1, 8 - index * 0.4),
            height: Math.max(1, 8 - index * 0.4),
            opacity: Math.max(0.1, 1 - index * 0.08),
          }}
        />
      ))}
    </div>
  )
}
