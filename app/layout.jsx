"use client"
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { usePathname } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const offBit = localFont({
  src: [
    {
      path: '../public/resources/fonts/PTF-OffBit-Trial/PTF-OffBit-Trial/PTF-OffBit-Trial TTF/OffBitTrial-101.ttf',
      style: '101',
    },
    // другие шрифты
  ],
});

export const offBitBold = localFont({
  src: [
    {
      path: '../public/resources/fonts/PTF-OffBit-Trial/PTF-OffBit-Trial/PTF-OffBit-Trial TTF/OffBitTrial-Bold.ttf',
      style: '101',
    },
    // другие шрифты
  ],
});

export const offBitRegular = localFont({
  src: [
    {
      path: '../public/resources/fonts/PTF-OffBit-Trial/PTF-OffBit-Trial/PTF-OffBit-Trial TTF/OffBitTrial-Regular.ttf',
      style: '101',
      subsets: ['latin', 'cyrillic', 'cyrillic-ext'],
    },
    // другие шрифты
  ],
});

export const offBitDot = localFont({
  src: [
    {
      path: '../public/resources/fonts/PTF-OffBit-Trial/PTF-OffBit-Trial/PTF-OffBit-Trial TTF/OffBitTrial-Dot.ttf',
      style: 'dot',
    },
    // другие шрифты
  ],
});

export const offBitDotBold = localFont({
  src: [
    {
      path: '../public/resources/fonts/PTF-OffBit-Trial/PTF-OffBit-Trial/PTF-OffBit-Trial TTF/OffBitTrial-DotBold.ttf',
      style: 'dot',
    },
    // другие шрифты
  ],
});



export default function RootLayout({ children }) {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex flex-col min-h-screen bg-background ">
          {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div> */}
            <Navbar />
            <main className={`flex-grow py-8 px-4 ${isActive('/about') ? 'inset-0 px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_60%,#4c2889_100%)]' : ''}`}>
              <section className="flex-grow mt-6 h-full ">
                {children}
              </section>
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
