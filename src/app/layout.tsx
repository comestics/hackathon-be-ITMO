import '@/styles/globals.scss'
import { Open_Sans } from 'next/font/google'

const inter = Open_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackathon be ITMO',
  description: 'the health and wellbeing management systems of university students and staff.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
