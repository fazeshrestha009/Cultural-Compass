import React from 'react'
import Image from 'next/image'
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';


const Footer = () => {
  return (
    <div className='bg-[#131D26] flex flex-col pt-6 px-4 md:px-10 w-full h-full'>
      <div className='flex flex-col text-white w-full items-center justify-center gap-5 pb-4'>
          <div className="flex items-center">
            <Image
              height={500}
              width={500}
              src="/logo.png"
              className="w-16 h-16 cursor-pointer md:w-24 md:h-24 lg:w-32 lg:h-32"
              alt="Web Studio Nepal"
            />
          </div>
          <div className='flex md:flex-row flex-col md:gap-8 gap-2 text-center'>
            <div className='flex md:flex-col flex-row md:gap-0 gap-2'>
                <p className='md:text-base text-sm lg:text-lg font-medium'>Address:</p>
                <Link
                href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                <p className='md:text-base text-sm lg:text-lg font-light hover:text-red-400'>Paknajol, Kathmandu</p>
                </Link>
            </div>
            <div className='flex md:flex-col flex-row md:gap-0 gap-2'>
                <p className='md:text-base text-sm lg:text-lg font-medium'>Phone</p>
                <Link
                  href="tel:+9779851178241"
                  className="flex items-center gap-3"
                >
                <p className='md:text-base text-sm lg:text-lg font-light hover:text-red-400'>9851178241</p>
                </Link>
            </div>
            <div className='flex md:flex-col flex-row md:gap-0 gap-2'>
                <p className='md:text-base text-sm lg:text-lg font-medium'>Email:</p>
                <Link
                  href="mailto:design.house072@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3"
                >
                <p className='md:text-base text-sm lg:text-lg font-light hover:text-red-400'>culturalcompass@gmail.com</p>
                </Link>
            </div>
          </div>
          <div className='flex flex-row text-[#FCFCFC] md:text-base gap-5 text-sm lg:text-lg font-normal'>
            Social Media: 
            <span className='flex flex-row gap-6 items-center justify-center'>
              <FaFacebookSquare className='text-3xl cursor-pointer hover:text-blue-500 border-none'/>
              <FaYoutube className='md:text-3xl text-2xl cursor-pointer hover:text-red-500 border-none'/>
              <FaInstagram className='md:text-3xl text-2xl cursor-pointer hover:text-pink-400 border-none'/>
            </span>
          </div>
        <div>
            <p className='text-sm'>@2024 Cultural Compass. All rights reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
