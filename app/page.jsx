"use client"
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '../components/mode-toogle'
import { offBit, offBitDot, offBitDotBold, offBitRegular, offBitBold } from './layout'
import Navbar from '@/components/navbar'
import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import { useAnimation } from 'framer-motion';
import { JetBrains_Mono } from 'next/font/google'
import Section from '@/components/section'
import Footer from '@/components/footer'

import Globe from '@/components/globe'

export const JetBrainsMono = JetBrains_Mono({ subsets: ['latin'] })


export default function Home() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHoveredForFast, setIsHoveredForFast] = React.useState(false);
  const [isHoveredForSimple, setIsHoveredForSimple] = React.useState(false);

  const animationControls = useAnimation();
  const fastAnimationControls = useAnimation();
  const simpleAnimationControls = useAnimation();

  const handleMouseEnter = () => {
    setIsHovered(true);
    animationControls.start({
      opacity: 1,
      y: -10,
      scale: 2,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    animationControls.start({
      opacity: 0,
      y: 0,
      scale: 1,
    });
  };

  const handleMouseEnterForFast = () => {
    setIsHoveredForFast(true);
    fastAnimationControls.start({
      opacity: 1,
      rotate: 15,
      y: -10,
      scale: 2,
    });
  };

  const handleMouseLeaveForFast = () => {
    setIsHoveredForFast(false);
    fastAnimationControls.start({
      opacity: 0,
      rotate: 0,
      y: 0,
      scale: 1,
    });
  };

  const handleMouseEnterForSimple = () => {
    setIsHoveredForSimple(true);
    simpleAnimationControls.start({
      opacity: 1,
      rotate: -15,
      y: -10,
      scale: 2.5,
    });
  }

  const handleMouseLeaveForSimple = () => {
    setIsHoveredForSimple(false);
    simpleAnimationControls.start({
      opacity: 0,
      rotate: 0,
      y: 0,
      scale: 1,
    });
  }

  return (
    <>

      <main className='relative w-screen min-h-screen flex flex-col bg-background items-center justify-start'>
        
        <div className='w-screen fixed'><Navbar/></div>

        <section className="flex-grow mt-6 h-full">
          <div className='flex flex-col items-center justify-center 2xl:flex-row'>
            <div className='p-6 sm:p-0 sm:max-w-[500px] xl:max-w-none'>
              <div className={`${offBitRegular.className} text-7xl flex-col gap-5 hidden xl:flex `}>
                <div className='flex flex-row gap-5'>
                  <motion.div whileHover={{ rotate: 360, scale: 1.1, }} transition={{ type: "spring", stiffness: 260, damping: 20 }}>
                    <span className={`${offBitDot.className} text-7xl cursor-default`}> Turning </span>
                  </motion.div>

                  <span className={`text-7xl relative ${isHovered ? `${offBitBold.className} drop-shadow-glow` : `${offBitDotBold.className}`}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    Ideas
                    <motion.div className={`absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-0.5em] opacity-0 `} animate={animationControls}>
                      <div className='realtive'>
                        <div className="absolute -inset-0.5 bg-warning rounded-lg blur-sm opacity-75 "></div>
                        <Lightbulb />
                      </div>
                    </motion.div>
                  </span>

                  <div>
                    <svg width="64px" height="64px" viewBox="0 0 24 24" strokeWidth="1.2" fill="none" xmlns="http://www.w3.org/2000/svg" color="var(--color)">
                      <path d="M3 12L21 12M21 12L12.5 3.5M21 12L12.5 20.5" stroke="var(--color)" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className={`${offBitDot.className} text-7xl`}> cool </p>
                  <p className={`${offBitDotBold.className} text-7xl`}> Websites: </p>
                </div>

                <div className='flex flex-row justify-around relative w-full'>
                  <span className={`text-7xl relative ${isHoveredForFast ? `${offBitDotBold.className} drop-shadow-glow` : `${offBitBold.className}`}`} onMouseEnter={handleMouseEnterForFast} onMouseLeave={handleMouseLeaveForFast}>
                    Fast
                    <motion.div className={`absolute -top-12 left-10 mt-5 opacity-0 rotate-15 filter-none`} animate={fastAnimationControls}>
                      <Image className='rounded-lg' src="/resources/images/giphy.gif" alt="GIF" width={75} height={25} quality={100} />
                    </motion.div>
                  </span>

                  <span className={`text-7xl relative ${isHoveredForSimple ? `${offBitDotBold.className} drop-shadow-glow` : `${offBitBold.className}`}`} onMouseEnter={handleMouseEnterForSimple} onMouseLeave={handleMouseLeaveForSimple}>
                    Simple
                    <motion.div className={`absolute -top-12 left-10 mt-5 opacity-0 rotate-15 filter-none`} animate={simpleAnimationControls}>
                      <Image className='rounded-lg' src="/resources/images/simple.gif" alt="GIF" width={75} height={25} quality={100} />
                    </motion.div>
                  </span>

                  <motion.div>
                    <p className={`${offBitBold.className}  text-7xl transition ease-in-out background-animate hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-highlight hover:via-indigo-400 hover:to-indigo-900 `}> Elegant </p>
                  </motion.div>
                </div>
              </div>
              <div className={`${offBitBold.className} text-start text-4xl md:text-5xl xl:hidden`}>
                <span className={`${offBitDot.className} `}> Turning </span>
                <span className={`${offBitDotBold.className} `}> Ideas </span>
                <span className={`${offBitDot.className} `}> into </span>
                <span className={`${offBitRegular.className} `}> cool </span>
                <span className={`${offBitDotBold.className} `}> Websites: </span>
                <span className={`${offBitBold.className} `}> Fast </span>
                <span className={`${offBitDot.className} `}> and </span>
                <span className={`${offBitBold.className} `}> Simple </span>
              </div>
              <p className={`${JetBrainsMono.className} w-full text-sm md:text-xl mt-5 md:mt-12 max-w-[800px] text-gray`}>
                I build cool and user-friendly websites that look great and work smoothly. Using the latest technology, I ensure that your site is both awesome and super fast. Let&apos;s make your online dream a reality!
              </p>
              <button className='button mt-5 md:mt-12'>Work with me</button>
            </div>
            {/* <div className='w-[200px] h-[200px]'> */}
            <Globe className={"hidden 2xl:flex 2xl:w-[600px] 2xl:h-[600px]"} width={600} height={600}></Globe>
            <Globe className={"hidden 2xl:hidden xl:flex xl:w-[800px] xl:h-[800px]"} width={800} height={800}></Globe>
            <Globe className={"hidden xl:hidden sm:flex w-[500px] h-[500px]"} width={500} height={500}></Globe>
            <Globe className={"sm:hidden flex w-[300px] h-[300px]"} width={300} height={300}></Globe>
            {/* </div> */}
          </div>
        </section>
        <Section title={"Smack Overslow"} content={"erjigherh"} badge_text={"Q&A Platform"}/>
      <Section title={"Smack Overslow"} content={"erjigherh"} badge_text={"Q&A Platform"}/>
      <Section title={"Smack Overslow"} content={"erjigherh"} badge_text={"Q&A Platform"}/>
      <Section title={"Smack Overslow"} content={"erjigherh"} badge_text={"Q&A Platform"}/>
      <Footer/>
      </main>
    </>

  )
}
