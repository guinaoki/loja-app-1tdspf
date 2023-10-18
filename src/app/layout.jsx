import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Quarta entrega',
}

export default function RootLayout({ children }) {
  return (
    <html lang='pt-br'>
      <body className={inter.className}>
    <header className='bg-gray-700 text-white'>
      <h2>MEUS PRODUTOS</h2>
      <ul>
        <li className='inline'>
          <Link href="/produtos/calca">CALÇA</Link>
        </li>
        <li className='inline'>
          <Link href="/produtos/camisa">CAMISA</Link>
        </li>
        <li className='inline'>
          <Link href="/produtos/meia">MEIA</Link>
        </li>
        <li className='inline'>
          <Link href="/produtos/tenis">TENIS</Link>
        </li>
      </ul>
    </header>
    </body>
    </html>
  )
}
