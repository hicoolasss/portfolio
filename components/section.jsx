import React from "react";
import { offBit, offBitDot, offBitDotBold, offBitRegular, offBitBold } from '../app/layout'
import { Separator } from "./ui/separator";
import { JetBrainsMono } from "@/app/page";
import { Badge } from "./ui/badge";

export default function Section({ title, content, images, badge_text }) {
    return (
        <>
            <Separator />
            <div className="flex flex-col items-start justify-start w-full px-4 md:px-32 lg:px-64 mt-12">
                <div className="flex flex-col items-start justify-start w-full px-4 mx-auto gap-5">
                    <div className="flex flex-row gap-5">
                        <p className={`${offBitBold.className} text-3xl uppercase text-center md:text-4xl`}>
                            {title}
                        </p>
                        <Badge className="bg-cyan font-bold text-md">{badge_text}</Badge>
                    </div>
                    <p className={`text-sm text-center text-gray`} >
                        {content}
                    </p>

                </div>

            </div>
        </>
    );
}