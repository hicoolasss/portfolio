import {
    FigmaLogoIcon,
    FramerLogoIcon,
    SketchLogoIcon,
    TwitterLogoIcon,
    GitHubLogoIcon,
    VercelLogoIcon,
    NotionLogoIcon,
    DiscordLogoIcon,
    InstagramLogoIcon,
    LinkedInLogoIcon,
  } from "@radix-ui/react-icons";
  
const LOGOS = [
    <FigmaLogoIcon key="figma" width={24} height={24} className="text-white"  />,
    <FramerLogoIcon key="framer" width={24} height={24} className="text-white" />,
    <SketchLogoIcon key="sketch" width={24} height={24} className=" text-white" />,
    <TwitterLogoIcon key="twitter" width={24} height={24} className="text-white" />,
    <GitHubLogoIcon key="github" width={24} height={24} className="text-white" />,
    <VercelLogoIcon key="vercel" width={24} height={24} className="text-white" />,
    <NotionLogoIcon key="notion" width={24} height={24} className="text-white" />,
    <DiscordLogoIcon key="discord" width={24} height={24} className="text-white" />,
    <InstagramLogoIcon key="instagram" width={24} height={24} className="text-white" />,
    <LinkedInLogoIcon key="linkedin" width={24} height={24} className="text-white" />,
];
  
  export const InfiniteSlider = () => {
    return (
      <div className="relative m-auto w-[500px] overflow-hidden  before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_50%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,black_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider flex w-[calc(250px*10)]"> 
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    );
  };
  