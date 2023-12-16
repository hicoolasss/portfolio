"use client"
import React from 'react'
import Image from 'next/image'
import { ModeToggle } from '../components/mode-toogle'
import { offBit, offBitDot, offBitDotBold, offBitRegular, offBitBold } from './layout'
import Navbar from '@/components/navbar'
import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'
import { useAnimation } from 'framer-motion';

export default function Home() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isHoveredForFast, setIsHoveredForFast] = React.useState(false);

  const animationControls = useAnimation();
  const fastAnimationControls = useAnimation();

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
      rotate: 0,
      y: -10,
      scale: 2,
    });
  };

  const handleMouseLeaveForFast = () => {
    setIsHoveredForFast(false);
    fastAnimationControls.start({
      opacity: 0,
      rotate: 15,
      y: 0,
      scale: 1,
    });
  };

  return (

    <main className='w-screen h-screen flex flex-col bg-background'>
      <Navbar />

      <section className="flex-grow py-8 px-4 md:px-32 lg:px-64 md:mt-24">
        <h1 className={`${offBitRegular.className} text-7xl flex flex-row gap-5 break-words `}>
          <motion.div whileHover={{ rotate: 360, scale: 1.1, }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}>
            <span className={`${offBitDot.className} text-7xl cursor-default`}> Turning </span>
          </motion.div>

          <span
            className={`text-7xl relative } ${isHovered ? `${offBitBold.className} drop-shadow-glow` : `${offBitDotBold.className} `}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Ideas
            <motion.div
              className={`absolute top-0 left-1/2 transform -translate-x-1/2 mt-[-0.5em] opacity-0 `}
              animate={animationControls}
            >
              <div className='realtive'>
                <div className="absolute -inset-0.5 bg-warning rounded-lg blur-sm opacity-75 "></div>
                <Lightbulb />
              </div>
            </motion.div>
          </span>


          <span className={`${offBitDot.className} text-7xl`}> into </span>
          <span className={`${offBitDotBold.className} text-7xl`}> Websites: </span>

          <span
            className={`text-7xl relative ${isHoveredForFast ? `${offBitBold.className} drop-shadow-glow` : `${offBitDotBold.className}`}`}
            onMouseEnter={handleMouseEnterForFast}
            onMouseLeave={handleMouseLeaveForFast}
          >
            Fast
            <motion.div
              className={`absolute -top-12 left-1/2 transform -translate-x-1/2 mt-5 opacity-0 rotate-15 filter-none `}
              animate={fastAnimationControls}
            >
              {/* Остальной код для Fast */}
              <Image className='rounded-lg'
                src="/resources/images/giphy.gif"
                alt="GIF"
                width={250}
                height={150}
                quality={100}
              />
            </motion.div>
          </span>

          <span className={`${offBitDot.className} text-7xl`}> and </span>
          <motion.div whileHover={{ rotate: 360, scale: 1.1 }}>
            <span className={`${offBitDotBold.className} text-7xl`}> Simple </span>
          </motion.div>
        </h1>

      </section>



    </main>
  )
}
