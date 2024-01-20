"use client"
import React from "react";
import { motion } from "framer-motion";
import { offBitRegular, offBitDot, offBitDotBold, offBitBold } from "@/app/layout";

const Card = ({title, description, content, Icon}) => {
    return (
       <motion.div className="border border-solid border-gray p-10 rounded-xl border-opacity-25 h-full"
       whileHover={{ scale: 1.1, }}
       transition={{
        type: "spring",
        damping: 10,
        mass: 0.75,
        stiffness: 100,
    }}
       >
              <Icon className="w-10 h-10"/>
              <p className={`${offBitDotBold.className} text-5xl mt-5 text-highlight`}>{title}</p>
              <h2 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 text-zinc-300">{description}</h2>
              <p className="scroll-m-20 text-l  tracking-tight mt-2 ">{content}</p>
       </motion.div>
    )
}

export default Card;