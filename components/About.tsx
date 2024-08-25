import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About:React.FC = () => {
  return (
      <div id='about' className='w-full flex flex-col items-center justify-evenly py-8 shadow-[inset_0px_2px_5px_rgba(255,255,255,0.2)] '>
      <div className='p-5 pb-10 mb-5 w-full shadow'>
             <h2 className='font-extrabold text-4xl text-text2 tracking-widest mb-8 text-center' >About Me</h2>
             <p className='text-text1 tracking-wider leading-6 text-justify text-sm font-thin md:px-10'>Hello! I&apos;m <strong>Raju Mudavath</strong>, a passionate Frontend Developer with a knack for crafting sleek, responsive websites using JavaScript, TailwindCSS, and ReactJS. With hands-on experience in Next.js, Redux, and a solid backend foundation in Node.js, Express.js, and MongoDB, I bring a full-stack perspective to every project. Let&apos;s build something amazing together!.</p>
      </div>
      <div className='w-full flex md:flex flex-col md:flex-row items-center justify-center'>
        <div className='w-[90%] md:w-[40%] flex flex-col items-center justify-center shadow -mt-20 mb-6'>
            <Image src="/myimg.png" alt="my-image" width={100} height={100} className='w-[80%]  drop-shadow-2xl brightness-90 filter hue-rotate-15 contrast-125 saturate-100'/>
            <button className="bg-white font-bold px-4 py-2 md:px-6 md:py-3 rounded-md w-[70%] shadow-xl tracking-widest text-lg md:text-xl shadow-slate-600 ">
            <Link href='https://resume.io/r/kpSyznSzv' target='_blank'>
              Download Resume
            </Link>
            </button> 
        </div>
           <div className='w-[90%] md:w-[50%] rounded-xl shadow-lg shadow-slate-700 bg-black border border-slate-600'>
           <h2 className='font-bold text-center text-2xl md:text-3xl text-text3 py-3 tracking-widest '>Personal Information</h2>
           <hr className='border-slate-600'></hr>
            <ul className='text-text1 font-thin tracking-wider w-full text-sm'>
                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[100px] md:w-[150px] text-right'>Name</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[200px] md:w-[250px]'>Raju Mudavath!</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[100px] md:w-[150px] text-right'>Nationality</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[200px] md:w-[250px]'>Citizen Of India</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[100px] md:w-[150px] text-right'>Address</strong>
                  <span className='font-bold'>:</span>
                  <strong className='w-[200px] md:w-[250px]'>Pune, Maharashtra, India</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[100px] md:w-[150px] text-right'>Phone</strong>
                  <span className='font-bold'>:</span>
                  <strong className='w-[200px] md:w-[250px]'>7995804557</strong>
                </li>

                <li className='my-5 flex justify-between flex-1'>
                  <strong className='w-[100px] md:w-[150px] text-right'>E-Mail</strong>
                  <span className='font-bold'>:</span> 
                  <strong className='w-[200px] md:w-[250px] break-words'>mrajunayak136@gmail.com</strong>
                </li>
            </ul>
            </div> 
        </div>
      </div>
  )
}

export default About