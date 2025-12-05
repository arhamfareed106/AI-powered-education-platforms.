import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fluentix - AI-powered Virtual Spanish Tutor for IB & AP Students',
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