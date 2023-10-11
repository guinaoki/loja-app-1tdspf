import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <h1>HOME</h1>
    
    <ul>
    <li><Link href="/produtos/tenis">Tênis</Link></li>
    <li><Link href="/produtos/meia">Meia</Link></li>
    <li><Link href="/produtos/camisa">Camisa</Link></li>
    <li><Link href="/produtos/calca">Calça</Link></li>
    </ul>

    <figure>
        <Image src="/img/casa" width={500} height={500} alt="Picture of the author"/>
      </figure>
    </>
  )
}
