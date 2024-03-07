"use client"
import React from "react";
import Link from "next/link";
import { offBitRegular, offBitDot, offBitDotBold } from "@/app/layout";
import { JetBrains_Mono } from 'next/font/google'
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toogle";
import { motion } from "framer-motion";
import { usePathname } from 'next/navigation'
import localFont from 'next/font/local'

const JetBrainsMono = localFont({
    src: [
      {
        path: '../public/resources/fonts/JetBrainsMono-2.304/fonts/ttf/JetBrainsMono-Regular.ttf',
        style: 'jetbrains',
      },
      // другие шрифты
    ],
  });
export default function Navbar() {
    const pathname = usePathname()

    const isActive = (path) => {
        return pathname === path
    }

    return (
        <header className="w-full fixed flex-col bg-background z-50 ">
            <nav className="flex flex-row items-center h-20 mx-5 md:mx-32 lg:mx-64 justify-between">
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.5 }}
                >
                    <Link href="/" className={`${offBitRegular.className} text-3xl`}>
                        criops
                    </Link>
                </motion.div>
                <div className="flex gap-3 lg:gap-10 items-center justify-center">
                    <Link href="/about"
                        // className={`${JetBrainsMono.className} text-md lg:text-l hovered_text relative`} text-zinc-600 dark:text-zinc-400
                        className={`${JetBrainsMono.className} text-md lg:text-l hovered_text relative ${isActive('/about') ? 'text-color' : 'text-zinc-600 dark:text-zinc-400'}`}
                    >
                        About
                    </Link>
                    <Link href="/contacts"
                        className={`${JetBrainsMono.className} text-md lg:text-l hovered_text relative ${isActive('/contacts') ? 'text-color' : 'text-zinc-600 dark:text-zinc-400'}`}
                    >
                        Contacts
                    </Link>
                    <ModeToggle />
                </div>
            </nav>

            <Separator className="w-full" />

        </header>
    )

}