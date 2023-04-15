import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <Link href="/apex-bravery">Apex Bravery</Link>
    </main>
  )
}
