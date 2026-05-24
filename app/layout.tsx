import type { Metadata } from 'next'
import { DM_Serif_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif"
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans"
});

export const metadata: Metadata = {
  title: 'ALT-remonty | Wykończenia Mieszkań',
  description: 'Profesjonalne wykończenie mieszkań pod klucz. 15+ lat doświadczenia, 200+ zrealizowanych projektów. 2 lata rękojmi, wysoka jakość i terminowość.',
  keywords: ['wykończenia mieszkań', 'remonty', 'pod klucz', 'alt-remonty', 'budownictwo', 'projektowanie wnętrz', 'wrocław', 'wrocław remonty', 'wrocław wykończenia mieszkań'],
  robots: {
    index: true,
    follow: true,
  },
  generator: 'v0.app',
  openGraph: {
    title: 'ALT-remonty | Wykończenia Mieszkań',
    description: 'Profesjonalne wykończenie mieszkań pod klucz. 15+ lat doświadczenia, 200+ zrealizowanych projektów. 2 lata rękojmi, wysoka jakość i terminowość.',
    type: 'website',
    locale: 'pl_PL',
    images: ['/icon.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ALT-remonty | Wykończenia Mieszkań',
    description: 'Profesjonalne wykończenie mieszkań pod klucz. 15+ lat doświadczenia, 200+ zrealizowanych projektów. 2 lata rękojmi, wysoka jakość i terminowość.',
    images: ['/icon.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.png',
        type: 'image/png',
      },
    ],
    apple: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" className={`${dmSerif.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
