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
        <header className="w-full fixed flex-col bg-transparent z-50 ">
            <nav className="flex flex-row items-center h-20 mx-5 md:mx-32 lg:mx-64 justify-between">
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`p-2 rounded-lg ${isActive('/') ? 'drop-shadow-glow' : ''}`}
                >
                    <Link href="/" className={`${offBitRegular.className} text-3xl ${isActive('/') ? 'text-color' : 'text-zinc-600 dark:text-zinc-400'} w-full h-full`}>
                        home
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{ scale: 1.5 }}
                    className={`p-2 rounded-lg ${isActive('/about') ? 'drop-shadow-glow' : ''}`}
                >
                    <Link href="/about" className={`${offBitRegular.className} text-3xl ${isActive('/about') ? 'text-color' : 'text-zinc-600 dark:text-zinc-400'}`}>
                        about
                    </Link>
                </motion.div>
            </nav>
        </header>
    )

}