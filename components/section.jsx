import React from "react";
import { offBit, offBitDot, offBitDotBold, offBitRegular, offBitBold } from '../app/layout'
import { Separator } from "./ui/separator";
import Image from "next/image";
import { Button } from "./ui/button";

const usof = "/resources/images/usof.png"

export default function Section({ title, content, image }) {
    return (
        <>
            <Separator className="mt-12" />
            <div className="pl-5 sm:pl-20 md:pl-32 flex flex-col xl:flex-row items-start justify-start w-full mt-12 gap-12 mb-12">
                <div className="flex flex-col items-start justify-end gap-8">
                    <div className="flex flex-row gap-5">
                        <p className={`${offBitBold.className} text-3xl uppercase text-center text-highlight md:text-4xl`}>
                            {title}
                        </p>
                        {/* <div className={`${JetBrainsMono.className} rounded-full text-xl px-4 flex items-center text-center bg-violet text-color`}>{badge_text}</div> */}
                    </div>
                    <p className={`text-md text-start text-gray max-w-[400px]`} >
                        {content}
                    </p>



                    <Button className="xl:mt-24 flex">Live Demo</Button>

                </div>
                {/* <div className="grid grid-cols-3 grid-rows-2 gap-4 bg-secondary_background_color rounded-lg p-5"> */}
                <div className="md:flex hidden 2xl:ml-96">
                    <Image
                        quality={100}
                        alt="image"
                        src={usof}
                        width={600}
                        height={600}
                        className="rounded-lg max-w-[600px] max-h-[600px]"

                    ></Image>
                </div>
                <div className="md:hidden flex">
                    <Image
                        quality={100}
                        alt="image"
                        src={usof}
                        width={325}
                        height={325}
                        className="rounded-lg max-w-[600px] max-h-[600px]"

                    ></Image>
                </div>
                {/* </div> */}

            </div>
        </>
    );
}