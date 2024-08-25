'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ButtonLink } from './Scroller';
import Image from 'next/image';

const Header: React.FC = () => {

  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  return (
    <header id = "header" className={`fixed w-full bg-black z-50 mnhdr transition-all ${scrolling ? 'bg-white' : ''} ${mobileMenuOpen ? 'h-24 blur-background' : ''} `}>
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" 
        className={`text-4xl font-extrabold
         ${scrolling ? 'text-black text-5xl' : 'text-text3'}
          underline tracking-[5px]`}>
          MYpoRtFoLio
        </Link>

        <div className="hidden md:flex space-x-6">
          <ButtonLink 
          className={`text-xl font-bold tracking-widest ${scrolling ? 'text-black' : 'text-text3'}`} buttonText='Home' elementId='hero'/>
          
          <ButtonLink 
          className={`text-xl font-bold tracking-widest  ${scrolling ? 'text-black' : 'text-text3'} `} buttonText='About' elementId='about'/>
          
          <ButtonLink 
          className={`text-xl font-bold tracking-widest  ${scrolling ? 'text-black' : 'text-text3'} `} buttonText='Experience' elementId='experiences'/>
          
          <ButtonLink 
          className={`text-xl font-bold tracking-widest  ${scrolling ? 'text-black' : 'text-text3'} `} buttonText='Projects' elementId='projects'/>
          
          <ButtonLink 
          className={`text-xl font-bold tracking-widest  ${scrolling ? 'text-black' : 'text-text3'} `} buttonText='Contact' elementId='contact'/>
{/* 
          <Link className="text-xl font-bold  text-gray-800 "  href='#hero'>Home</Link>
          <Link className="text-xl font-bold  text-gray-800 "  href='#about'>About</Link>
          <Link className="text-xl font-bold  text-gray-800 "  href='#experiences'>Experience</Link>
          <Link className="text-xl font-bold  text-gray-800 "  href='#projects'>Projects</Link>
          <Link className="text-xl font-bold  text-gray-800 "  href='#contact'>Contact</Link> */}
        </div>
        <div className="flex space-x-4">
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
          <Link href="https://github.com/1MRaju" target='_blank' className="hidden md:flex">
            <Image
             src={scrolling 
                  ? '/icons8-github-96.png' 
                  : '/icons8-github-96.png'} 
             alt="" 
             className={`${scrolling ? 'translate-y-8 w-[100px]':'' } `} width={90} height={90}  />
          </Link>
        </div>
      </nav>
      <div className={`md:hidden ${mobileMenuOpen ? 'flex' : 'hidden'} justify-between mt-4 mb-6 ml-5`}>
        <div className="flex flex-col space-y-4">
          <ButtonLink className="text-left text-lg font-medium text-gray-800 " buttonText='Home' elementId='hero'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 " buttonText='About' elementId='about'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 " buttonText='Experience' elementId='experiences'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 " buttonText='Projects' elementId='projects'/>
          <ButtonLink className="text-left text-lg font-medium text-gray-800 " buttonText='Contact' elementId='contact'/>

{/* <Link className="text-left text-lg font-medium text-gray-800 " href='hero'>Home</Link>
          <Link className="text-left text-lg font-medium text-gray-800 "  href ='#about'>About</Link>
          <Link className="text-left text-lg font-medium text-gray-800 "  href ='#experiences'>Experience</Link>
          <Link className="text-left text-lg font-medium text-gray-800 "  href ='#projects'>Project</Link>
          <Link className="text-left text-lg font-medium text-gray-800 "  href ='#contact'>Contact</Link> */}
        </div>
        <div className="flex items-center mt-20 mr-4">
          <Link href="https://github.com/1MRaju" target='_blank'>
            <Image
               src={scrolling 
                ? './icons8=github-48.png' 
                : './icons8=github-48.png'} 
              alt="" 
            className='GitHub'
            width={80} height={80} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
