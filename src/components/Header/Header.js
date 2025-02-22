'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
// import Image from 'next/image'
import { psychedelic, inter } from '@/app/fonts'
// import Popup from '../Popup/AccessPopup'

export default function Header () {
  const [navOpen, setNavOpen] = useState(false)
  const pathname = usePathname()
  // const [isPopupOpen, setIsPopupOpen] = useState(false)

  // const openPopup = () => setIsPopupOpen(true)
  // const closePopup = () => setIsPopupOpen(false)

  return (
    <header
      className={`bg-black relative md:px-10 p-2 shadow-black shadow-lg ${psychedelic.variable} ${inter.variable} z-[100]`}
    >
      {/* <Popup isOpen={isPopupOpen} onClose={closePopup} /> */}
      {/* Desktop Navigation */}
      <div className='mx-auto flex items-center justify-between'>
        <div className='flex gap-x-2 items-center justify-center'>
          <div className='md:hidden flex items-center justify-center'>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className='text-white focus:outline-none'
            >
              <svg
                className='h-10 w-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 4H20 M4 8H14 M4 12H20 M4 16H14'
                />
              </svg>
            </button>
          </div>
          <Link href='/' className='flex items-center md:gap-x-3 gap-x-2'>
            <img src='/favicon.png' alt='Sychedelic Logo' className='w-6 md:w-10' />
            <div className='text-white gap-0'>
              <h1 className='md:text-2xl text-lg font-medium font-psychedelic'>
                Sychedelic
              </h1>
              <p className='text-[8px] md:text-xs pt-0 -mt-1'>Amplify you</p>
            </div>
          </Link>
        </div>

        <button
          // onClick={openPopup}
          className='rounded-full md:px-6 md:py-3 text-sm py-2 px-4 md:text-base text-white font-medium font-psychedelic'
          style={{
            background:
              'linear-gradient(to right, #9b5de5 0%, #2C4CFF 63%, #5a189a 100%)',
            border: 'none'
          }}
        >
          <Link
            target='_blank'
            rel='noopener noreferrer'
            href='https://docs.google.com/forms/d/e/1FAIpQLSenYPmCUgANRS3lgCsSC7ZgKA1pS3BRTRSSUKikT-Z70aVePQ/viewform?embedded=true'
          >
            Access Exclusive Club
          </Link>
        </button>
        <nav className='hidden md:flex items-center gap-6 font-inter'>
          {/* <Link
            href="/blogs"
            className={`relative text-white ${
              pathname === "/blogs" ? "text-[#FF8C8C]" : ""
            } hover:text-[#FF8C8C] group`}
          >
            Blogs
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF8C8C] transition-all duration-300 group-hover:w-full"></span>
          </Link> */}
          <Link
            href='/career'
            className={`relative text-white ${
              pathname === '/career' ? 'text-[#FF8C8C]' : ''
            } hover:text-[#FF8C8C] group`}
          >
            Career
            <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF8C8C] transition-all duration-300 group-hover:w-full'></span>
          </Link>
          <Link
            href='/aboutus'
            className={`relative text-white ${
              pathname === '/aboutus' ? 'text-[#FF8C8C]' : ''
            } hover:text-[#FF8C8C] group`}
          >
            About Us
            <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF8C8C] transition-all duration-300 group-hover:w-full'></span>
          </Link>
        </nav>

        {/* Mobile Navigation Toggle Button */}
      </div>

      {/* Mobile Navigation Menu */}
      {navOpen && (
        <nav className='md:hidden h-[100vh] bg-white fixed z-[100] left-0 top-0 w-3/4 p-6 pb-20 justify-between flex pl-10 flex-col'>
          <div className='flex w-full justify-end'>
            <button
              onClick={() => setNavOpen(!navOpen)}
              className='focus:outline-none'
            >
              <svg
                className='h-10 w-10'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <ul className='flex flex-col gap-4 text-black text-3xl font-semibold font-inter'>
            <li>
              <Link
                href='/'
                onClick={() => setNavOpen(false)}
                className={`relative ${
                  pathname === '/' ? 'text-[#FF0000]' : 'text-black'
                } hover:text-[#FF0000] group`}
              >
                Home
                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
            {/* <li>
              <Link
                href="/blogs"
                onClick={() => setNavOpen(false)}
                className={`relative ${
                  pathname === "/blogs" ? "text-[#FF0000]" : "text-black"
                } hover:text-[#FF0000] group`}
              >
                Blogs
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li> */}
            <li>
              <Link
                href='/career'
                onClick={() => setNavOpen(false)}
                className={`relative ${
                  pathname === '/career' ? 'text-[#FF0000]' : 'text-black'
                } hover:text-[#FF0000] group`}
              >
                Career
                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
            <li>
              <Link
                href='/aboutus'
                onClick={() => setNavOpen(false)}
                className={`relative ${
                  pathname === '/aboutus' ? 'text-[#FF0000]' : 'text-black'
                } hover:text-[#FF0000] group`}
              >
                About Us
                <span className='absolute left-0 -bottom-1 w-0 h-[2px] bg-[#FF0000] transition-all duration-300 group-hover:w-full'></span>
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
