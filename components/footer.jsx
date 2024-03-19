import Link from 'next/link'
import { Button } from './ui/button'
export default function Footer() {
    return (
        <footer className="relative px-4 md:px-6 py-8 overflow-x-hidden">
            <div className="absolute top-0 h-px w-full"
                style={{ background: 'radial-gradient(50% 100% at 50% 100%, rgba(255, 255, 255, 0.32) 0%, rgba(255, 255, 255, 0) 100%)' }} >
            </div>
            <div className='w-full h-full flex flex-col items-center justify-center'>
                <small className="text-sm font-medium leading-none text-muted-foreground">
                    <span>Made by </span>
                   
                    <Link href="/" className='underline underline-offset-4'>
                        criops
                    </Link>
                    <span>.</span>
                </small>


            </div>
        </footer>
    )
}