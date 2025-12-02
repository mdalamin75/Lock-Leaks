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

// Plus Jakarta Sans font configuration using local fonts
const plusJakartaSans = localFont({
  src: [
    {
      path: '../public/fonts/plus-jakarta-sans/plus-jakarta-sans-v12-latin-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/plus-jakarta-sans/plus-jakarta-sans-v12-latin-500.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/plus-jakarta-sans/plus-jakarta-sans-v12-latin-600.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/plus-jakarta-sans/plus-jakarta-sans-v12-latin-700.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
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
    <html lang="en" className={`${inter.variable} ${plusJakartaSans.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

