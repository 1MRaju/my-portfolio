import React from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';

const Hero: React.FC = () => {
  return (
    <div id='hero' className=" md:h-screen  relative md:pt-16 py-28">
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
      <div className=" md:h-screen  text-center text-text1 px-6 md:px-12 flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wider"><span className='animated-gradient'>Welcome to my Portfolio! </span></h1>
        <h1 className="text-2xl md:text-5xl font-bold mb-4 text-text3">I&apos;am Raju Mudavath</h1>
        <h3 className="text-md md:text-xl mb-8 text-text1 text-center tracking-widest font-thin">
          This website is for me to showcase my previous projects and achievements, hope you enjoy your stay!
        </h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <ButtonLink className="bg-white text-black tracking-widest font-bold  px-10 py-3 rounded-md text-lg" buttonText='Previous Work' elementId='experiences'/>
          <button className="bg-black border border-white text-text1 font-semibold px-16 py-3 rounded-md">
            <Link href='https://drive.google.com/file/d/1CriL7zs0kZMJfFBHBU9VKvZNaawN7K_J/view?usp=drive_link' target='_blank' className='tracking-widest text-lg'>
              Resume
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;