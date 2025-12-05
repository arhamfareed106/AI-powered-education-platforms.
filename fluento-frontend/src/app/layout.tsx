import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fluento AI - Master IB/AP Spanish',
  description: 'Immersive Spanish learning platform powered by AI tutoring',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}