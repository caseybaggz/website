import Nav from '@/components/Nav'
import './global.css'

const TITLE = 'Casey Baggz | Creative Engineer'
const DESC =
  'The official website for Principal Engineer, Admin and core maintainer of the Pando Design system by Pluralsight.'

export const metadata = {
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    url: 'https://caseybaggz.dev',
    siteName: TITLE,
    images: [
      {
        url: 'https://user-images.githubusercontent.com/4819738/223263615-2c5b52ee-fb9b-4795-b5ee-6cdf28a7888b.png',
        alt: 'Promo poster image',
        height: 600,
        width: 800,
      },
      {
        url: 'https://user-images.githubusercontent.com/4819738/223265337-56947cda-b2ca-44f0-908b-3bcacc7f4c84.png',
        alt: 'Promo poster image',
        height: 1600,
        width: 1800,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="https://fonts.pluralsight.com/ps-tt-commons/v1/ps-tt-commons-variable-roman.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/fonts.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@pluralsight/design-tokens@next/npm/normalize/normalize.css"
        />
      </head>
      <body className="app">
        {children}
        <Nav />
      </body>
    </html>
  )
}
