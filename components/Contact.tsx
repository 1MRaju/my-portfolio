import React from 'react';
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import Link from 'next/link';

const Contact: React.FC = () => {
  return (
    <div id='contact' className=' py-16 '>
        <h2 className="text-4xl mb-8 md:mb-16  font-extrabold tracking-widest  text-text2 text-center">Connect me via my Socials below! ✨</h2>
        <div className=" p-8 rounded-lg shadow-lg text1 w-[90%] md:max-w-4xl mx-auto mt-8 cc-bg blur-background bg-black border border-text3">
            <div className="flex justify-between items-center">
                <div>
                    <h2 className="text-2xl md:text-3xl text-text3 font-bold mb-2 tracking-[7px]">RAJU MUDAVATH</h2>
                    <p className="text-sm  ttext-ext1 mb-4">Associate Software Engineer</p>
                    <button className="bg-white border text-black font-bold tracking-widest px-4 py-2 rounded shadow  transition-colors duration-200">
                        <Link href='https://drive.google.com/file/d/1n8jrAAHwB9ju6Et-1VP4CEJzYTuKR6xo/view?usp=drive_link' target='_blank'>
                            Resume
                        </Link>
                    </button>
                </div>

                <div className="flex space-x-4">
                    <a href="https://github.com/1MRaju" target="_blank" rel="noreferrer" className=" bg-text3 hover:text-black">
                        <FaGithub size={44} />
                    </a>
                    <a href="https://www.linkedin.com/in/m45raju" target="_blank" rel="noreferrer" className=" bg-text3 hover:text-black">
                        <FaLinkedin size={44} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Contact;