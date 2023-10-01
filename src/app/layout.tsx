import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import Footer from './components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ABRAHAM PORTFOLIO',
  description: 'Recreated by dwayne',
  openGraph:{
    title: 'ABRAHAM PORTFOLIO',
    siteName: 'ABRAHAM PORTFOLIO',
    description: 'A portfolio',
    url: 'https://abbotweb.vercel.app',
    images:[{url:'https://abbotweb.vercel.app/_next/image?url=%2Fslow.jpg&w=640&q=75', width: 800, height: 600}]
}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <body className={` ${inter.className}`}>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}
