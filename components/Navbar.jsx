'use client'
import Link from 'next/link'
import React from 'react'

import { Bars3Icon } from '@heroicons/react/24/solid';

const Navbar = () => {
  return (
    <>
        <div className='w-full z-10 sticky top-0 left-0 shadow-xl bg-[#9a9a9a] opacity-95'>
            <div className='w-full flex px-[10%] items-center justify-between '>
              
                <img src='/achs.png' alt='logo' className=' object-contain w-[200px]'/>
                
                <div className='hidden lg:block space-x-6 text-sm font-semibold tracking-wider'>
                    <Link href='/about'>ABOUT</Link>
                    <Link href='/courses'>COURSES</Link>
                    <Link href='/life'>LIFE @ ACHS</Link>
                    <Link href='/career'>CAREERS</Link>
                </div>
                <button>
                
                    <Bars3Icon className='h-8 w-8'/>
                </button>
            </div>
        </div>
    </>
  )
}

export default Navbar