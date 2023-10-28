import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/utils/Navbar'

const inter = Inter({ subsets: ['latin'] })

//SEO
export const metadata: Metadata = {
  title: 'CuyAnimeList',
  description: 'Website anime indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">      
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
        </body>
    </html>
  )
}
