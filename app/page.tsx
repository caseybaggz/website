// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from './page.module.css'
import Nav from '@/components/Nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Hello there</h1>

      <section>
        <p>Here is some content</p>
      </section>
    </main>
  )
}
