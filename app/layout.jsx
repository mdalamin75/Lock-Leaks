import './globals.css'
import localFont from 'next/font/local'

// Inter font configuration
const inter = localFont({
  src: [
    {
      path: '../public/fonts/Inter-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'Lock Leaks',
  description: 'Grow your revenue while we protect your content.',
  icons: {
    icon: [
      { url: '/img/logo.png', sizes: 'any' },
      { url: '/img/logo_2.png', sizes: 'any' },
    ],
    shortcut: '/img/logo.png',
    apple: '/img/logo_2.png',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

