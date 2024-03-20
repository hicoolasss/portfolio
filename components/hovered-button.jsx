import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";


export default function HoveredButton({ link, Icon, title }) {
    const buttonRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!buttonRef.current || isFocused) return;

        const div = buttonRef.current;
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
        <Link href={link}>
            <motion.div
                ref={buttonRef}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                whileHover={{ scale: 1.15, color: "#f0e0e9", }} transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="relative border border-solid border-secondary_background p-4 rounded-3xl items-center lg:pl-8 flex gap-2 "

            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-1000 rounded-3xl "
                    style={{
                        opacity,
                        background: `radial-gradient(55px circle at ${position.x}px ${position.y}px, rgba(255,0,128,1), transparent 40%)`,
                    }}
                />
                <Icon />
                {title}

            </motion.div>

        </Link>
    );
}