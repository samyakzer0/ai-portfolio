import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Cursor from './components/Cursor'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SAMYAK - AI Builder',
  description: 'AI Builder specializing in intelligent systems and automation solutions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Cursor />
        {children}
      </body>
    </html>
  )
}
