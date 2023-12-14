import Image from 'next/image'
import { ModeToggle } from '../components/mode-toogle'
import { offBit } from './layout'

export default function Home() {
  return (
    <main className='w-screen h-screen flex bg-background'>
      <div className={`${offBit.className} font-101 `}>
        <h1 className='text-7xl'>Go, lazy fat vixen 977 be shrewd, ☼ ☽ quick When zombies arrive ✓, quickly fax Judge Pat.</h1>
      </div>
      <ModeToggle />
    </main>
  )
}
