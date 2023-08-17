import './globals.scss'
import type { Metadata } from 'next'
import { Press_Start_2P, Roboto_Mono } from 'next/font/google'

const pressStart2p = Press_Start_2P({ 
  weight: '400', 
  subsets: ['latin'],
  variable: '--font-press-start-2p' 
});
const robotoMono = Roboto_Mono({ 
  weight: ['100', '300', '600'], 
  subsets: ['latin'],
  variable: '--font-roboto-mono'
 });

export const metadata: Metadata = {
  title: 'Pokedex',
  description: 'Nextjs Pokedex',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pressStart2p.variable} ${robotoMono.variable}`}>{children}</body>
    </html>
  )
}
