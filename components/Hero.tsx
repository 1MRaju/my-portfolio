import React from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Hero: React.FC = () => {
  return (
    <div id='hero' className=" h-screen  relative pt-16">
      <svg className="absolute left-0 top-0 right-99 z-[-1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurry-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
            <ellipse rx="127.5" ry="184.5" cx="358.48854527148316" cy="283.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
      </svg>
      <div className=" h-screen  text-center text-text1 px-6 md:px-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider"><span className='animated-gradient'>Welcome to my portfolio! </span></h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-4"><span className='animated-gradient text-text2 tracking-wider'>I&apos;am Raju Mudavath </span></h1>
        <h3 className="text-xl md:text-2xl mb-8 text-text3 text-center tracking-wider">
          This website is for me to showcase my previous projects and achievements, hope you enjoy your stay!
        </h3>
        <div className="flex justify-center space-x-4">
          <ButtonLink className="bg-white text-black tracking-widest font-bold px-10 py-3 rounded-md text-lg" buttonText='Previous Work' elementId='experiences'/>
          <button className="bg-black border-2 border-white text-text1 font-semibold px-16 py-3 rounded-md">
            <Link href='https://drive.google.com/file/d/1n8jrAAHwB9ju6Et-1VP4CEJzYTuKR6xo/view?usp=drive_link' target='_blank' className='tracking-widest text-lg'>
              Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;