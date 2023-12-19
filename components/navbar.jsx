"use client"
import React from "react";
import Link from "next/link";
import { offBitRegular, offBitDot, offBitDotBold } from "@/app/layout";
import { JetBrains_Mono } from 'next/font/google'
import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toogle";
import { motion } from "framer-motion";


const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })
export default function Navbar() {
    return (
        <header className="w-full flex flex-col bg-background z-100">
            <nav className="flex flex-row items-center h-20 mx-5 md:mx-32 lg:mx-64 justify-between">
                <motion.div
                    whileHover={{ rotate: 15, scale: 1.5 }}
                >
                    <Link href="/" className={`${offBitRegular.className} text-3xl`}>
                        criops
                    </Link>
                </motion.div>
                <div className="flex gap-3 lg:gap-10 items-center justify-center">
                    <Link href="/about" className={`${JetBrainsMono.className} text-md lg:text-l hovered_text relative`}>
                        About
                    </Link>
                    <Link href="/contact" className={`${JetBrainsMono.className} text-md lg:text-l hovered_text relative`}>
                        Contacts
                    </Link>
                    <ModeToggle />
                </div>
            </nav>

            <Separator className="w-full" />

        </header>
    )

}