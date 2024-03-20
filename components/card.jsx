// "use client"
// import React from "react";
// import { motion } from "framer-motion";
// import { offBitRegular, offBitDot, offBitDotBold, offBitBold } from "@/app/layout";

// const Card = ({title, description, content, Icon}) => {
//     return (
//        <motion.div className="border border-solid border-gray p-10 rounded-xl border-opacity-25 h-full"
//        whileHover={{ scale: 1.1, }}
//        transition={{
//         type: "spring",
//         damping: 10,
//         mass: 0.75,
//         stiffness: 100,
//     }}
//        >
//               <Icon className="w-10 h-10"/>
//               <p className={`${offBitDotBold.className} lg:text-5xl text-3xl mt-5 text-highlight`}>{title}</p>
//               <h2 className="scroll-m-20 lg:text-xl text-l font-semibold tracking-tight mt-2 text-zinc-300">{description}</h2>
//               <p className="scroll-m-20 lg:text-l text-md tracking-tight mt-2 ">{content}</p>
//        </motion.div>
//     )
// }

// export default Card;
import { LockClosedIcon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function CardSpotlight({ title, description, content, Icon }) {
    const divRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <motion.div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-full rounded-3xl border border-neutral-800 bg-neutral-950 p-8"
            whileHover={{ scale: 1.05, }}
            transition={{
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
            }}
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-500 rounded-3xl"
                style={{
                    opacity,
                    background: `radial-gradient(300px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.25), transparent 40%)`,
                }}
            />
            <div className="mb-4">
                <Icon className="h-8 w-8 text-highlight" />
            </div>
            <h3 className="text-xl mb-2 font-medium tracking-tight text-neutral-100">
                {title}
            </h3>
            <p className="text-sm text-neutral-400">
                {content}
            </p>
        </motion.div>
    );
};