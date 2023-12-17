import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import { ThemeProvider } from '../components/theme-provider'
import './globals.css'

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
