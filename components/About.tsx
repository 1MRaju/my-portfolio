import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About:React.FC = () => {
  return (
    <>
      <div id='about' className='w-full flex items-center justify-center py-16 shadow-[inset_0px_2px_5px_rgba(255,255,255,0.5)] '>
      {/* <svg className="absolute right-0 bottom-0 leftt-99 z-[1]" viewBox="0 0 800 800">
        <defs>
            <filter id="bbblurr-filter" x="-100%" y="-100%" width="400%" height="400%" filterUnits="objectBoundingBox" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feGaussianBlur stdDeviation="73" x="0%" y="0%" width="100%" height="100%" in="SourceGraphic" edgeMode="none" result="blur"></feGaussianBlur>
            </filter>
        </defs>
        <g filter="url(#bbblurr-filter)">
        <ellipse rx="127.5" ry="144.5" cx="658.48854527148316" cy="563.1451261127883" fill="hsla(286, 59%, 10%, 1.00)"></ellipse>
        </g>
     </svg> */}

        <div className='w-[40%] flex flex-col items-center justify-around shadow pb-3 ml-16 '>
            <Image src="/myimg.png" alt="my-image" width={100} height={100} className='w-[90%]  drop-shadow-2xl brightness-90 filter hue-rotate-15 contrast-125 saturate-100 h-auto'/>
            <button className="bg-white font-bold px-6 py-3 rounded-md w-[70%] shadow-xl tracking-widest text-xl ">
            <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
              Download Resume
            </Link>
          </button> 
        </div>
        <div className='w-[60%] flex flex-col items-center justify-between'>
           <div className='p-10 mb-5 w-[100%] shadow'>
             <h2 className='font-extrabold text-4xl text-text2 tracking-widest mb-14' >About Me</h2>
             <p className='text-text1 tracking-wider leading-10'>Hello! I'm <strong>Raju Mudavath</strong>, a passionate Frontend Developer with a knack for crafting sleek, responsive websites using JavaScript, TailwindCSS, and ReactJS. With hands-on experience in Next.js, Redux, and a solid backend foundation in Node.js, Express.js, and MongoDB, I bring a full-stack perspective to every project. Let's build something amazing together!.</p>
           </div>
           <div className=' p-5 px-12 -mt-5 -ml-10 w-[65%] rounded-xl shadow-2xl bg-black border border-text3 '>
           <h2 className='font-bold text-center text-3xl text-text3 pb-5 tracking-widest '>Personal Information</h2>
           <hr/>
            <ul className='text-text3 tracking-wider'>
                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[150px] text-right'>NAME</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[250px]'>Raju Mudavath!</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[150px] text-right'>NATIONALITY</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[250px]'>Citizen Of India</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[150px] text-right'>ADDRESS</strong>
                  <span className='font-bold'>:</span>
                  <strong className='w-[250px]'>Pune, Maharashtra, India</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[150px] text-right'>PHONE</strong>
                  <span className='font-bold'>:</span>
                  <strong className='w-[250px]'>7995804557</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[150px] text-right'>E-MAIL</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[250px]'>mrajunayak136@gmail.com</strong>
                </li>
            </ul>
            </div>
        </div> 
      </div>
    </>
  )
}

export default About