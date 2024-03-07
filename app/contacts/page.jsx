"use client"
// import { useFollowPointer } from "@/functions/follow-pointer";
// import { useRef } from "react";
// import { motion } from "framer-motion";

// export default function ContactsPage() {
//     const ref = useRef(null);
//     const { x, y } = useFollowPointer(ref);

//     return (
//         <motion.div
//           ref={ref}
//           className="z-50 w-24 h-24 bg-blue-500 rounded-full shadow-lg"
//           animate={{ x, y }}
//         />
//       );
// }
import React, { useState } from "react";
import { motion } from "framer-motion";
import useMouse from "@react-hook/mouse-position";
export default function App() {
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

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
            opacity: 1,
            height: 10,
            width: 10,
            fontSize: "16px",
            backgroundColor: "#1e91d6",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.6
            }
        },
        project: {
            opacity: 1,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "#fff",
            color: "#000",
            height: 80,
            width: 80,
            fontSize: "18px",
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
        contact: {
            opacity: 1,
            backgroundColor: "#FFBCBC",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };

    function projectEnter(event) {
        setCursorText("View");
        setCursorVariant("project");
    }

    function projectLeave(event) {
        setCursorText("");
        setCursorVariant("default");
    }

    function contactEnter(event) {
        setCursorText("👋");
        setCursorVariant("contact");
    }

    function contactLeave(event) {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <div>
            <div className="container w-screen h-screen" ref={ref}>
                <motion.div
                    variants={variants}
                    className="circle"
                    animate={cursorVariant}
                    transition={spring}
                >
                    <span className="cursorText">{cursorText}</span>
                </motion.div>
                <div
                    className="project"
                    onMouseEnter={projectEnter}
                    onMouseLeave={projectLeave}
                >
                    <span className="projectName">Discord Onboarding</span>
                </div>
                <div className="contactWrapper">
                    <div
                        className="contact"
                        onMouseEnter={contactEnter}
                        onMouseLeave={contactLeave}
                    >
                        Want to Chat?
                    </div>
                </div>
            </div>
        </div>
    );
}