"use client"
import React from 'react'
import { useAnimation } from 'framer-motion';
import { offBitRegular, offBitDot, offBitDotBold, offBitBold } from "@/app/layout";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion } from 'framer-motion'
import Image from 'next/image';
export default function AboutPage() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className={`${offBitDotBold.className} text-7xl mt-24 text-center`}>Ilya Serikov</h1>
            </div>
            <div className="grid grid-cols-5 grid-rows-2 gap-5 mx-20 my-auto">
                <div className="p-10 rounded-2xl text-accent_color mt-24  bg-background_color1 flex flex-col gap-5 col-span-3 row-span-1 ">
                    <p className="text-4xl text-foreground ">
                        <span className={`${offBitDotBold.className}`}>Hello there! </span>
                        It&apos;s great to meet you.</p>
                    <Separator />
                    <p className="text-start text-l">My name is Ilya Serikov, and I&apos;m a beginner web developer. You might have come across some of my projects already. I have hands-on experience in building both the frontend and backend parts of an application, and I also have some decent design skills.</p>
                </div>

                <div className="p-10 rounded-2xl text-accent_color mt-24  bg-background_color1 flex flex-col gap-5 col-span-2 row-span-2 col-start-4">
                    <p className={`${offBitBold.className} uppercase text-4xl text-color flex items-end gap-2 `}>
                        <svg
                            width="48px"
                            height="48px"
                            strokeWidth="1.2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            color="var(--highlight)"
                        >
                            <path
                                d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
                                fill="var(--highlight)"
                                stroke="var(--highlight)"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z"
                                stroke="var(--highlight)"
                                strokeWidth="1.2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Skills
                    </p>

                    <div className="grid grid-cols-3 grid-rows-3 gap-5 w-full  text-neutral-300 mt-16">
                        <Link href="https://nextjs.org/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background p-4 rounded-3xl items-center pl-8 flex gap-2">
                                NEXT.js</motion.div>
                        </Link>
                        <Link href="https://react.dev/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-1 row-start-2  p-4 rounded-3xl pl-8 ">
                                React</motion.div>
                        </Link>
                        <Link href="https://nodejs.org/en">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-1 row-start-3  p-4 rounded-3xl pl-8 ">
                                Node.js</motion.div>
                        </Link>
                        <Link href="https://github.com/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-2 row-start-1  p-4 rounded-3xl pl-8 ">
                                Github</motion.div>
                        </Link>
                        <Link href="https://www.figma.com/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-2 row-start-2  p-4 rounded-3xl pl-8 ">
                                Figma</motion.div>
                        </Link>
                        <Link href="https://www.notion.so/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-2 row-start-3  p-4 rounded-3xl pl-8 ">
                                Notion</motion.div>
                        </Link>
                        <Link href="https://framer.com/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-3 row-start-1  p-4 rounded-3xl pl-8 ">
                                Framer</motion.div>
                        </Link>
                        <Link href="https://www.realtimecolors.com/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background col-start-3 row-start-2  p-4 rounded-3xl pl-8 ">
                                UI/UX Design</motion.div>
                        </Link>
                        <Link href="https://www.mongodb.com/">
                            <motion.div whileHover={{ scale: 1.1, y: -15, backgroundColor: "#ff0080", color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }} className="border border-solid border-secondary_background row-start-3  p-4 rounded-3xl pl-8 ">
                                Mongodb</motion.div>
                        </Link>
                    </div>
                </div>



            </div>

        </>
    );
}

