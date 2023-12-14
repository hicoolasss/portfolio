import Image from 'next/image'
import { ModeToggle } from '../components/mode-toogle'

export default function Home() {
  return (
    <main className='w-screen h-screen flex bg-background'>
      <ModeToggle/>
    </main>
  )
}
