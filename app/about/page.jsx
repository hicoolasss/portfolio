import { offBitRegular, offBitDot, offBitDotBold } from "@/app/layout";


export default function AboutPage() {
    return (
        <>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className={`${offBitRegular.className} text-7xl mt-24 text-center`}>About me</h1>
            </div>
            <p className="pl-24 text-xl text-gray mt-6 max-w-[800px] text-start">Hello there! It`&apos;s great to meet you. My name is Ilya Serikov, and I&apos;m a beginner web developer. You might have come across some of my projects already. I have hands-on experience in building both the frontend and backend parts of an application, and I also have some decent design skills.</p>
        </>
    );
}