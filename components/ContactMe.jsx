import { ArrowRightIcon } from "@radix-ui/react-icons";
import { animate, motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
import Link from "next/link";
import { IconJarLogoIcon, InstagramLogoIcon, GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Telegram } from "iconoir-react";
// export const ButtonGooey = () => {
//     const [isMenuVisible, setMenuVisible] = useState(false);

//     // Элементы круглого меню
//     const menuItems = [
//         { id: 'email', icon: '✉️' },
//         { id: 'favorite', icon: '❤️' },
//         { id: 'settings', icon: '⚙️' },
//         // Добавьте больше элементов по необходимости
//     ];

//     // Анимации для появления элементов меню
//     const menuItemVariants = {
//         visible: i => ({
//             opacity: 1,
//             scale: 1,
//             transition: {
//                 delay: i * 0.1
//             }
//         }),
//         hidden: { opacity: 0, scale: 0 }
//     };

//     function animateButton() {
//         anime({
//             targets: '.gooey',
//             scale: 1.1,
//             duration: 1000,
//             direction: 'alternate',
//             easing: 'easeInOutQuad'
//         });
//     }



//     return (
//         <>
//         <div className="w-full flex items-center justify-center mb-10">
//             <motion.div
//                 className="z-10 relative rounded-3xl p-6 font-bold bg-white text-black inline-flex items-center cursor-pointer gooey select-none"
//                 // whileHover={{ scale: 1.1 }}
//                 // whileTap={{ scale: 0.9 }}
//                 // transition={{
//                 //     type: "spring",
//                 //     damping: 10,
//                 //     mass: 0.75,
//                 //     stiffness: 100,
//                 // }}
//                 onClick={() => setMenuVisible(!isMenuVisible)}
//             >
//                 Contact me
//                 <div className="absolute -z-10 right-0 rounded-full p-3 font-bold bg-neutral-900 inline-flex items-center subbutton">
//                     <ArrowRightIcon className="w-6 h-6" />
//                 </div>
//                 {/* {menuItems.map((item, index) => (
//                     <motion.div
//                         key={item.id}
//                         className="absolute rounded-full p-3 font-bold bg-pink-500 inline-flex items-center justify-center"
//                         variants={menuItemVariants}
//                         custom={index}
//                         initial="hidden"
//                         animate={isMenuVisible ? 'visible' : 'hidden'}
//                         style={{
//                             top: '50%',
//                             left: '50%',
//                             width: '50px',
//                             height: '50px',
//                             marginLeft: '-25px', // половина ширины
//                             marginTop: '-25px', // половина высоты
//                             // Для каждой кнопки следует определить собственное смещение
//                         }}
//                     >
//                         {item.icon}
//                     </motion.div>
//                 ))} */}
//             </motion.div>
//         </div>
//         <svg
//                 className="absolute hidden"
//                 width="0"
//                 height="0"
//                 xmlns="http://www.w3.org/2000/svg"
//                 version="1.1"
//             >
//                 <defs>
//                     <filter id="gooey">
//                         <feGaussianBlur
//                             in="SourceGraphic"
//                             stdDeviation="10"
//                             result="blur"
//                         />
//                         <feColorMatrix
//                             in="blur"
//                             mode="matrix"
//                             values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
//                             result="gooey"
//                         />
//                         <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
//                     </filter>
//                 </defs>
//             </svg>

//             <div>

//             </div>
//         </>
//     );
// };
export const ButtonGooey = () => {

    const [isOpened, setIsOpened] = useState(false);


    const firstBubbleVariants = {
        opened: {
            translateX: '160%',
            translateY: '90%',
            transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
            },
        },
        closed: {
            translateX: '0%',
            translateY: '0%',
        },
    };

    const secondBubbleVariants = {
        opened: {
            translateX: '-160%',
            translateY: '90%',
            transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
            },
        },
        closed: {
            translateX: '0%',
            translateY: '0%',
        },
    };

    const thirdBubbleVariants = {
        opened: {
            translateX: '-160%',
            translateY: '-90%',
            transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
            },
        },
        closed: {
            translateX: '0%',
            translateY: '0%',
        },
    };

    const fourthBubbleVariants = {
        opened: {
            translateX: '160%',
            translateY: '-90%',
            transition: {
                type: "spring",
                damping: 10,
                mass: 0.75,
                stiffness: 100,
            },
        },
        closed: {
            translateX: '0%',
            translateY: '0%',
        },
    };

    return (
        <>
            <AnimatePresence>
                <div className="wrapper relative h-full w-full flex flex-col items-center justify-center mb-20 mt-20">
                    <motion.div className="button  rounded-3xl p-6 font-bold bg-white text-black inline-flex items-center justify-center cursor-pointer  select-none"
                        onClick={() => setIsOpened(!isOpened)}
                        animate={isOpened ? "opened" : "closed"}
                    >
                        Contact me
                        <motion.div className="bubble absolute rounded-3xl bg-highlight text-black -z-10 flex flex-col items-center justify-center w-16 h-full"
                            variants={firstBubbleVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                mass: 0.75,
                                stiffness: 100,
                            }}
                        >
                            <Link href="https://www.instagram.com/hicoolasss/" target="_blank" className="flex items-center justify-center w-full h-full">
                                <InstagramLogoIcon className="h-6 w-6 text-white" />
                            </Link>
                        </motion.div>

                        <motion.div className="bubble absolute rounded-3xl bg-blue-500 text-black -z-10 flex flex-col items-center justify-center w-16 h-full"
                            variants={secondBubbleVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                mass: 0.75,
                                stiffness: 100,
                            }}
                        >
                            <Link href="https://t.me/hicoolasss" target="_blank" className="flex items-center justify-center w-full h-full">
                                <Telegram className="h-6 w-6 text-white" />
                            </Link>
                        </motion.div>

                        <motion.div className="bubble absolute rounded-3xl bg-zinc-900 text-black -z-10 flex flex-col items-center justify-center w-16 h-full"
                            variants={thirdBubbleVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                mass: 0.75,
                                stiffness: 100,
                            }}
                        >
                            <Link href="https://github.com/hicoolasss" target="_blank" className="flex items-center justify-center w-full h-full">
                                <GitHubLogoIcon className="h-6 w-6 text-white" />
                            </Link>
                        </motion.div>

                        <motion.div className="bubble absolute rounded-3xl bg-blue-400 text-black -z-10 flex flex-col items-center justify-center w-16 h-full"
                            variants={fourthBubbleVariants}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{
                                type: "spring",
                                damping: 10,
                                mass: 0.75,
                                stiffness: 100,
                            }}
                        >
                            <Link href="https://www.linkedin.com/in/ilya-serikov-1ab71a253/" target="_blank" className="flex items-center justify-center w-full h-full">
                                <LinkedInLogoIcon className="h-6 w-6 text-white" />
                            </Link>
                        </motion.div>
                        
                    </motion.div>
                </div>
            </AnimatePresence>

            <svg
                className="absolute hidden"
                width="0"
                height="0"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
            >
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                            result="gooey"
                        />
                        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
                    </filter>
                </defs>
            </svg>

            <style jsx>{`
          .wrapper {
            filter: url("#gooey");
          }
  
          .button {
            background: #fff;
            color: #000;
            font-size: 1.25rem;
            line-height: 1.25rem;
          }
  
         
  
        
        `}</style>
        </>
    );
};
