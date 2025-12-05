import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elon Musk 3D Interactive',
  description: 'Interactive 3D model experience',
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
