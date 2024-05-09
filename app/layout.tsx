'use client'
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.scss'
import { useEffect } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/provider'

const inter = Inter({ subsets: ['latin'] })

const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

function SafeHydrate({ children }: { children: React.ReactNode }) {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    require('bootstrap')
  }, [])

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SafeHydrate>
          <ReduxProvider>{children}</ReduxProvider>
        </SafeHydrate>
      </body>
    </html>
  )
}
