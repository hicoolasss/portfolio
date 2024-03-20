"use client"
import React from 'react'
import { useAnimation } from 'framer-motion';
import { offBitRegular, offBitDot, offBitDotBold, offBitBold } from "@/app/layout";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image';
import { Target, Clock, PersonStanding } from 'lucide-react';
import { Wand2 } from 'lucide-react';
import CardSpotlight from '@/components/card';
import { useState } from 'react';
import useMouse from "@react-hook/mouse-position";
import { ButtonGooey } from '@/components/ContactMe';
import { TypewriterEffectSmooth } from '@/components/typewritter';
import { Meteors } from '@/components/meteors';
import { BackgroundBeams } from '@/components/background-beams';
import { InfiniteSlider } from '@/components/infine-slider';
import { SparklesCore } from '@/components/sparkles';
import HoveredButton from '@/components/hovered-button';
import { EvervaultCard, Icon } from '@/components/evervault-card';

export default function AboutPage() {
    const [cursorVariant, setCursorVariant] = useState("default");
    const CursorRef = React.useRef(null);

    const ref = React.useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 100,
        leaveDelay: 100
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 0,
            height: 10,
            width: 10,
            fontSize: "16px",
            backgroundColor: "#ff0080",
            x: mouseXPosition || 500,
            y: mouseYPosition || 500,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        button: {
            opacity: 1,
            backgroundColor: "#ff0080",
            color: "#000",
            height: 55,
            width: 55,
            zIndex: 0,
            backdropFilter: "blur(10px)",
            fontSize: "18px",
            x: mouseXPosition - 24,
            y: mouseYPosition - 24
        },
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Criops.",
            className: `${offBitBold.className} dark:text-highlight `
        },
    ];

    function buttonEnter(event) {
        setCursorVariant("button");
        CursorRef.current.classList.add("blur-md");
    }
    function buttonLeave(event) {
        setCursorVariant("default");
    }

    const svgVariants = {
        animate: (i) => ({
            scale: [1.05, 1.15, 1.05],
            transition: {
                delay: i * 0.1,
                repeat: Infinity,
                repeatType: "loop",
                duration: 2,
                ease: "easeInOut",
                stiffness: 260,
                damping: 20,

            }
        }
        ),
    };

    const circles = [
        { radius: 375, initialOpacity: 0.05 },
        { radius: 337.5, initialOpacity: 0.16 },
        { radius: 300, initialOpacity: 0.26 },
        { radius: 262.5, initialOpacity: 0.37 },
        { radius: 225, initialOpacity: 0.47 },
        { radius: 187.5, initialOpacity: 0.58 },
        { radius: 150, initialOpacity: 0.68 },
        { radius: 112.5, initialOpacity: 0.79 },
        { radius: 75, initialOpacity: 0.89 },
      ];

    return (
        <>

            <div className="w-full h-full flex flex-col items-center justify-center">
                {/* <h1 className={`${offBitDotBold.className} text-7xl mt-24 text-center`}>Ilya Serikov</h1> */}
                <TypewriterEffectSmooth className="mt-24 text-center`" words={words} />
            </div>
            <div className="grid grid-cols-3 2xl:grid-cols-5 grid-rows-3 xl:grid-rows-2 gap-5 mx-20 mb-24"
                ref={ref}
            >
                <div className="mt-24 flex flex-col relative gap-5 col-span-3 row-span-1 justify-center items-center ">

                    {/* <div className="w-full h-full dark:bg-black bg-white  dark:bg-grid-md-white/[0.2]  relative flex items-center justify-center rounded-3xl">
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
                            <InfiniteSlider />
                        </p>
                    </div> */}

                    {/* <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
                        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white relative z-20">
                            Aceternity
                        </h1>
                        <div className="w-[40rem] h-40 relative">
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                            <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                            <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                            <SparklesCore
                                background="transparent"
                                minSize={0.4}
                                maxSize={1}
                                particleDensity={1200}
                                className="w-full h-full"
                                particleColor="#FFFFFF"
                            />

                            <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
                        </div>
                    </div> */}

                    {/* <BackgroundBeams /> */}

                    <div className="border border-black/[0.2] dark:border-white/[0.2] p-4 relative w-full h-full">
                        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
                        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

                        <EvervaultCard text="hover" />
                    </div>
                </div>

                <div className="p-10 rounded-2xl text-accent_color 2xl:mt-24  bg-gradient flex flex-col gap-5 col-span-3 row-span-2 2xl:col-start-4 row-start-3 2xl:row-start-1">
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
                    <div className="grid grid-cols-3 grid-rows-3 lg:gap-5 gap-2 w-full lg:p-10  text-neutral-300 font-semibold mt-12"
                    >
                        <motion.div
                            className="w-12 h-12 fixed rounded-full bg-white opacity-5 flex top-0 left-0 z-10 pointer-events-none"
                            variants={variants}
                            animate={cursorVariant}
                            transition={spring}
                            ref={CursorRef}
                        >
                        </motion.div>
                        <Link href="https://nextjs.org/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9", }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background p-4 rounded-3xl items-center lg:pl-8 flex gap-2 "
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <NextJsLogo />
                                NEXT.js

                            </motion.div>

                        </Link>
                        {/* <HoveredButton link="https://nextjs.org/" Icon={NextJsLogo} title="Next.js" /> */}


                        <Link href="https://react.dev/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-1 row-start-2  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <ReactLogo />
                                React</motion.div>
                        </Link>
                        <Link href="https://nodejs.org/en">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-1 row-start-3  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <NodeJsLogo />
                                Node.js</motion.div>
                        </Link>
                        <Link href="https://github.com/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-2 row-start-1  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <GithubLogo />
                                Github</motion.div>
                        </Link>
                        <Link href="https://www.figma.com/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-2 row-start-2  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <FigmaLogo />
                                Figma</motion.div>
                        </Link>
                        <Link href="https://www.notion.so/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-2 row-start-3  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <NotionLogo />
                                Notion</motion.div>
                        </Link>
                        <Link href="https://framer.com/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-3 row-start-1  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <FramerLogo />
                                Framer</motion.div>
                        </Link>
                        <Link href="https://www.realtimecolors.com/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background col-start-3 row-start-2  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <UiUxDesign />
                                Design</motion.div>
                        </Link>
                        <Link href="https://www.mongodb.com/">
                            <motion.div whileHover={{ scale: 1.15, color: "#f0e0e9" }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                                className="border border-solid border-secondary_background row-start-3  p-4 rounded-3xl lg:pl-8 items-center flex gap-2"
                                onMouseEnter={buttonEnter}
                                onMouseLeave={buttonLeave}
                            >
                                <MongodbLogo />
                                Mongodb</motion.div>
                        </Link>
                    </div>
                </div>
                <Image
                    className='rounded-md mt-5 row-start-2'
                    src="/resources/images/me4.jpg"
                    width={350}
                    height={250}
                    quality={100}
                    alt="Picture of the author"
                >
                </Image>

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className='mt-10 row-start-2'
                    viewBox="0 0 800 800"
                >
                    <defs>
                        <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="#c50054" stopOpacity="0.5" />
                            <stop offset="50%" stopColor="#ff0080" stopOpacity="0.5" />
                            <stop offset="100%" stopColor="#ff5daf" stopOpacity="0.5" />
                        </radialGradient>
                    </defs>
                    <g fill="url(#cccircular-grad)">
                        {/* <circle r={375} cx={400} cy={400} opacity="0.05" />
                        <circle r="337.5" cx={400} cy={400} opacity="0.16" />
                        <circle r={300} cx={400} cy={400} opacity="0.26" />
                        <circle r="262.5" cx={400} cy={400} opacity="0.37" />
                        <circle r={225} cx={400} cy={400} opacity="0.47" />
                        <circle r="187.5" cx={400} cy={400} opacity="0.58" />
                        <circle r={150} cx={400} cy={400} opacity="0.68" />
                        <circle r="112.5" cx={400} cy={400} opacity="0.79" />
                        <circle r={75} cx={400} cy={400} opacity="0.89" /> */}
                        {circles.map((circle, index,) => (
                            <motion.circle
                                key={circle.radius}
                                r={circle.radius}
                                cx={400}
                                cy={400}
                                variants={svgVariants}
                                animate="animate"
                                custom={index}
                                opacity={circle.initialOpacity}
                            />
                        ))}

                    </g>
                </svg>

                <Image
                    className='rounded-md mt-5 row-start-2'
                    src="/resources/images/me3.jpg"
                    width={350}
                    height={250}
                    quality={100}
                    alt="Picture of the author"
                >
                </Image>
                {/* <div className='w-full row-start-3 col-span-2 bg-fas rounded-lg  h-full mt-5'></div> */}
            </div>
            <p className={`${offBitBold.className} lg:text-9xl text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-400  `}>How I like to work</p>
            {/* <p className={`${offBitBold.className} text-3xl text-center `}>To implement the project successfully, I need a clear project brief from the client with the following details:</p> */}

            <div className="grid lg:grid-cols-6 grid-rows-2 gap-12  mt-24">
                {/* <CardSpotlight className=""></CardSpotlight> */}

                <div className="col-span-2 col-start-2">
                    <CardSpotlight className=""
                        Icon={Target}
                        title={"Purpose of the Website"}
                        description={"Define the main goal and functionality."}
                        content={"Once you have provided an overview of your project's main objective, I can assist you in identifying a more efficient and appropriate approach for its development."}
                    >


                    </CardSpotlight>
                </div>
                <div className="col-span-2 col-start-4">
                    <CardSpotlight className=""
                        Icon={Wand2}
                        title={"Design Preferences:"}
                        description={"Specify design preferences, including examples or preferences for light or dark theme."}
                        content={"Design is an important part of a website. Please try to clearly explain what you want in a precise manner."}
                    >


                    </CardSpotlight>
                </div>
                <div className="col-span-2 col-start-2 row-start-2">
                    <CardSpotlight className=""
                        Icon={Clock}
                        title={"Timeline:"}
                        description={"Establish project deadlines and milestones"}
                        content={"If you provide me with a reasonable deadline, I can ensure the swift development of a high-quality website. "}
                    >


                    </CardSpotlight>
                </div>
                <div className="col-span-2 col-start-4 row-start-2">
                    <CardSpotlight className=""
                        Icon={PersonStanding}
                        title={"Target Audience:"}
                        description={"Identify the intended users and target audience."}
                        content={"Understanding and prioritizing the target audience is paramount in web development. The success of a website hinges on its ability to resonate with and cater to the specific needs and preferences of the intended users. "}
                    >


                    </CardSpotlight>
                </div>
            </div>
            <ButtonGooey />

        </>
    );
}



const NextJsLogo = () => {
    return (<svg
        aria-label="Next.js logomark"
        className="next-mark_root__iLw9v"
        data-theme="dark"
        height={30}
        role="img"
        viewBox="0 0 180 180"
        width={30}
    >
        <mask
            height={180}
            id=":R0:mask0_408_134"
            maskUnits="userSpaceOnUse"
            style={{ maskType: "alpha" }}
            width={180}
            x={0}
            y={0}
        >
            <circle cx={90} cy={90} fill="black" r={90} />
        </mask>
        <g mask="url(#:R0:mask0_408_134)">
            <circle
                cx={90}
                cy={90}
                data-circle="true"
                fill="black"
                r={90}
                stroke="white"
                strokeWidth="6px"
            />
            <path
                d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                fill="url(#:R0:paint0_linear_408_134)"
            />
            <rect
                fill="url(#:R0:paint1_linear_408_134)"
                height={72}
                width={12}
                x={115}
                y={54}
            />
        </g>
        <defs>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id=":R0:paint0_linear_408_134"
                x1={109}
                x2="144.5"
                y1="116.5"
                y2="160.5"
            >
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
            <linearGradient
                gradientUnits="userSpaceOnUse"
                id=":R0:paint1_linear_408_134"
                x1={121}
                x2="120.799"
                y1={54}
                y2="106.875"
            >
                <stop stopColor="white" />
                <stop offset={1} stopColor="white" stopOpacity={0} />
            </linearGradient>
        </defs>
    </svg>)

}


const ReactLogo = () => {
    return (
        <svg width={30} height={30} viewBox="-10.5 -9.45 21 18.9" fill="#0C9FCB" xmlns="http://www.w3.org/2000/svg" ><circle cx="0" cy="0" r="2" fill="#0C9FCB"></circle><g stroke="#0C9FCB" strokeWidth="1" fill="none"><ellipse rx="10" ry="4.5"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse><ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse></g></svg>
    )
}

const NodeJsLogo = () => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 256 282"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet"
        >
            <g fill="#8CC84B">
                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />
                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
            </g>
        </svg>
    )
}

const GithubLogo = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={30}
            height={30}
            fill='#fff'
            viewBox="0 0 24 24"
        >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
    )
}

const FigmaLogo = () => {
    return (
        <svg
            width={30}
            height={30}
            viewBox="0 0 90 90"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width={90} height={90} fill="#1E1E1E" />
            <g clipPath="url(#clip0_1_136)">
                <path
                    d="M45 45.5C45 42.9804 46.0009 40.5641 47.7825 38.7825C49.5641 37.0009 51.9804 36 54.5 36C57.0196 36 59.4359 37.0009 61.2175 38.7825C62.9991 40.5641 64 42.9804 64 45.5C64 48.0196 62.9991 50.4359 61.2175 52.2175C59.4359 53.9991 57.0196 55 54.5 55C51.9804 55 49.5641 53.9991 47.7825 52.2175C46.0009 50.4359 45 48.0196 45 45.5Z"
                    fill="#1ABCFE"
                />
                <path
                    d="M26 64.5C26 61.9804 27.0009 59.5641 28.7825 57.7825C30.5641 56.0009 32.9804 55 35.5 55H45V64.5C45 67.0196 43.9991 69.4359 42.2175 71.2175C40.4359 72.9991 38.0196 74 35.5 74C32.9804 74 30.5641 72.9991 28.7825 71.2175C27.0009 69.4359 26 67.0196 26 64.5V64.5Z"
                    fill="#0ACF83"
                />
                <path
                    d="M45 17V36H54.5C57.0196 36 59.4359 34.9991 61.2175 33.2175C62.9991 31.4359 64 29.0196 64 26.5C64 23.9804 62.9991 21.5641 61.2175 19.7825C59.4359 18.0009 57.0196 17 54.5 17H45Z"
                    fill="#FF7262"
                />
                <path
                    d="M26 26.5C26 29.0196 27.0009 31.4359 28.7825 33.2175C30.5641 34.9991 32.9804 36 35.5 36H45V17H35.5C32.9804 17 30.5641 18.0009 28.7825 19.7825C27.0009 21.5641 26 23.9804 26 26.5V26.5Z"
                    fill="#F24E1E"
                />
                <path
                    d="M26 45.5C26 48.0196 27.0009 50.4359 28.7825 52.2175C30.5641 53.9991 32.9804 55 35.5 55H45V36H35.5C32.9804 36 30.5641 37.0009 28.7825 38.7825C27.0009 40.5641 26 42.9804 26 45.5V45.5Z"
                    fill="#A259FF"
                />
            </g>
            <defs>
                <clipPath id="clip0_1_136">
                    <rect width={38} height={57} fill="white" transform="translate(26 17)" />
                </clipPath>
            </defs>
        </svg>

    )
}

const NotionLogo = () => {
    return (
        <svg
            viewBox="0 0 15 15"
            width={30}
            height={30}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeWidth={0} strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier" strokeWidth={0}>

                <path
                    d="M3.25781 3.11684C3.67771 3.45796 3.83523 3.43193 4.62369 3.37933L12.0571 2.93299C12.2147 2.93299 12.0836 2.77571 12.0311 2.74957L10.7965 1.85711C10.56 1.67347 10.2448 1.46315 9.64083 1.51576L2.44308 2.04074C2.18059 2.06677 2.12815 2.19801 2.2327 2.30322L3.25781 3.11684ZM3.7041 4.84917V12.6704C3.7041 13.0907 3.91415 13.248 4.38693 13.222L12.5562 12.7493C13.0292 12.7233 13.0819 12.4341 13.0819 12.0927V4.32397C13.0819 3.98306 12.9508 3.79921 12.6612 3.82545L4.12422 4.32397C3.80918 4.35044 3.7041 4.50803 3.7041 4.84917ZM11.7688 5.26872C11.8212 5.50518 11.7688 5.74142 11.5319 5.76799L11.1383 5.84641V11.6205C10.7965 11.8042 10.4814 11.9092 10.2188 11.9092C9.79835 11.9092 9.69305 11.7779 9.37812 11.3844L6.80345 7.34249V11.2532L7.61816 11.437C7.61816 11.437 7.61816 11.9092 6.96086 11.9092L5.14879 12.0143C5.09615 11.9092 5.14879 11.647 5.33259 11.5944L5.80546 11.4634V6.29276L5.1489 6.24015C5.09625 6.00369 5.22739 5.66278 5.5954 5.63631L7.53935 5.50528L10.2188 9.5998V5.97765L9.53564 5.89924C9.4832 5.61018 9.69305 5.40028 9.95576 5.37425L11.7688 5.26872ZM1.83874 1.33212L9.32557 0.780787C10.245 0.701932 10.4815 0.754753 11.0594 1.17452L13.4492 2.85424C13.8436 3.14309 13.975 3.22173 13.975 3.53661V12.7493C13.975 13.3266 13.7647 13.6681 13.0293 13.7203L4.33492 14.2454C3.78291 14.2717 3.52019 14.193 3.23111 13.8253L1.47116 11.5419C1.1558 11.1216 1.02466 10.8071 1.02466 10.4392V2.25041C1.02466 1.77825 1.23504 1.38441 1.83874 1.33212Z"
                    fill="#fff"
                />
            </g>
        </svg>
    )
}

const FramerLogo = () => {
    return (
        <svg
            fill="#fff"
            width="30px"
            height="30px"
            viewBox="-2.4 -2.4 28.80 28.80"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            transform="rotate(0)"
            stroke="#fff"
        >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <title>Framer icon</title>
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
            </g>
        </svg>

    )
}

const UiUxDesign = () => {
    return (
        <svg
            width="30px"
            height="30px"
            strokeWidth="1.2"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="#fff"
        >
            <path
                d="M21 7.35304L21 16.647C21 16.8649 20.8819 17.0656 20.6914 17.1715L12.2914 21.8381C12.1102 21.9388 11.8898 21.9388 11.7086 21.8381L3.30861 17.1715C3.11814 17.0656 3 16.8649 3 16.647L2.99998 7.35304C2.99998 7.13514 3.11812 6.93437 3.3086 6.82855L11.7086 2.16188C11.8898 2.06121 12.1102 2.06121 12.2914 2.16188L20.6914 6.82855C20.8818 6.93437 21 7.13514 21 7.35304Z"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M20.5 16.7222L12.2914 12.1619C12.1102 12.0612 11.8898 12.0612 11.7086 12.1619L3.5 16.7222"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M3.52844 7.29357L11.7086 11.8381C11.8898 11.9388 12.1102 11.9388 12.2914 11.8381L20.5 7.27777"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 21L12 3"
                stroke="#fff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    )
}

const MongodbLogo = () => {
    return (
        <svg viewBox="0 0 1024 1024" width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="#000000">
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
            <g id="SVGRepo_iconCarrier">
                <circle cx={512} cy={512} r={512} style={{ fill: "#13aa52" }} />{" "}
                <path
                    d="M648.86 449.44c-32.34-142.73-108.77-189.66-117-207.59-9-12.65-18.12-35.15-18.12-35.15-.15-.38-.39-1.05-.67-1.7-.93 12.65-1.41 17.53-13.37 30.29-18.52 14.48-113.54 94.21-121.27 256.37-7.21 151.24 109.25 241.36 125 252.85l1.79 1.27v-.11c.1.76 5 36 8.44 73.34H526a726.68 726.68 0 0 1 13-78.53l1-.65a204.48 204.48 0 0 0 20.11-16.45l.72-.65c33.48-30.93 93.67-102.47 93.08-216.53a347.07 347.07 0 0 0-5.05-56.76zM512.35 659.12s0-212.12 7-212.08c5.46 0 12.53 273.61 12.53 273.61-9.72-1.17-19.53-45.03-19.53-61.53z"
                    style={{ fill: "#fff" }}
                />
            </g>
        </svg>

    )
}

const Prikol = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"

            viewBox="0 0 800 800"
        >
            <defs>
                <radialGradient id="cccircular-grad" r="50%" cx="50%" cy="50%">
                    <stop offset="0%" stopColor="#c50054" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#ff0080" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#ff5daf" stopOpacity="0.5" />
                </radialGradient>
            </defs>
            <g fill="url(#cccircular-grad)">
                <circle r={375} cx={400} cy={400} opacity="0.05" />
                <circle r="337.5" cx={400} cy={400} opacity="0.16" />
                <circle r={300} cx={400} cy={400} opacity="0.26" />
                <circle r="262.5" cx={400} cy={400} opacity="0.37" />
                <circle r={225} cx={400} cy={400} opacity="0.47" />
                <circle r="187.5" cx={400} cy={400} opacity="0.58" />
                <circle r={150} cx={400} cy={400} opacity="0.68" />
                <circle r="112.5" cx={400} cy={400} opacity="0.79" />
                <circle r={75} cx={400} cy={400} opacity="0.89" />
            </g>
        </svg>

    )
}