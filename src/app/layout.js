import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EdgeX Global'
}

export const contentType = 'image/png'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" sizes="32x32" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col items-center min-h-screen max-h-max bg-black-2 text-white">
          <div className="lg:w-1/3 w-screen min-h-screen max-h-max">
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
