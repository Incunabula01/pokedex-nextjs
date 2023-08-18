import './globals.scss'
import type { Metadata } from 'next'
import { Press_Start_2P, Roboto_Mono } from 'next/font/google'
import  Link  from 'next/link';
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

import styles from './layout.module.scss';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${pressStart2p.variable} ${robotoMono.variable}`}>
        <main className="flex min-h-screen flex-col">
          <header className="text-center p-1 my-2">
            <Link href="/">
              <h1>Pokedex</h1>
            </Link>
            
          </header>
          <section className={styles['pokedex-container']}>
            <div className={styles['pokelist-container']} id="list">
              {children}
            </div>
            </section>
          {/* WIP Will be added next release
          <section className={styles['pokedex-pagination']}>
            <Pagination
                    currentPage={currentPage}
                    totalCount={pokemonList.length}
                    pageSize={PAGE_SIZE}
                    siblingCount={2}
                    onPageChange={page => {
                        if (typeof page === 'number') {
                            setCurrentPage(page);
                        }
                    }} />
          </section> */}
          </main>
      </body>
    </html>
  )
}
