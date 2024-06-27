'use client'
import React, {useState, useEffect,useRef } from 'react'
import Image from 'next/image'
import {FaRegClock} from 'react-icons/fa6'
import {FaBook} from 'react-icons/fa'



const Courses = () => {
  const [isVisible, setIsVisible]=useState(false)
  const ref=useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        rootMargin: '0px',
        threshold: 1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return (
    <>
        <div className='w-full  transition ease-in-out duration-300 '>
          <div className='w-full px-[10%] flex flex-col justify-between items-center top-0 sm:top-14 relative '>
            <div ref={ref} className={`transform transition duration-1000 flex flex-col justify-center items-center  ${
              isVisible?'translate-y-0 opacity-100':'translate-y-8 opacity-0'
            }`}>
                <p className='lg:text-7xl text-xl text-sky-800 leading-5 lg:leading-10 tracking-widest mb-3 font-black drop-shadow-2xl'>Courses</p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 mt-4'>
              <div className='h-[500px] w-2/3 mx-auto lg:w-full gap-6 flex flex-col p-2  transition-all duration-300 hover:scale-105 hover:shadow-inner cursor-pointer shadow-lg border-[1px] border-gray-300 rounded-lg bg-gray-200'>
                <div className='h-2/3 w-full relative overflow-hidden'>
                  <Image src='/csit.jpg'  fill alt="" className='object-cover transform -skew-y-3 absolute -mt-8'  />
                </div>
                <div  className='h-1/3 flex flex-col gap-10 bg-gray-200'>
                  <span className='text-sky-600 text-2xl font-semibold px-4'>
                    B. Sc. CSIT
                  </span>
                  <div className='flex flex-row justify-between p-4 items-center text-xl text-gray-400 border-t-[1px] m-2'>
                    <div className='flex gap-4'>
                        <FaRegClock />
                        <span>126</span>
                    </div>
                    <div className='flex gap-4'>
                      <FaBook />
                      <span>39</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-[500px] w-2/3 mx-auto lg:w-full gap-6 flex flex-col p-2  transition-all duration-300 hover:scale-105 hover:shadow-inner cursor-pointer shadow-lg border-[1px] border-gray-300 rounded-lg bg-gray-200'>
                <div className='h-2/3 w-full relative overflow-hidden'>
                  <Image src='/bca.jpg'  fill alt="" className='object-cover transform -skew-y-3 absolute -mt-8'  />
                </div>
                <div  className='h-1/3 flex flex-col gap-10'>
                  <span className='text-sky-600 text-2xl font-semibold px-4'>
                    BCA
                  </span>
                  <div className='flex flex-row justify-between p-4 items-center text-xl text-gray-400 border-t-[1px] m-2'>
                    <div className='flex gap-4'>
                        <FaRegClock />
                        <span>123</span>
                    </div>
                    <div className='flex gap-4'>
                      <FaBook />
                      <span>40</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-[500px] w-2/3 mx-auto lg:w-full gap-6 flex flex-col p-2  transition-all duration-300 hover:scale-105 hover:shadow-inner cursor-pointer shadow-lg border-[1px] border-gray-300 rounded-lg bg-gray-200'>
                <div className='h-2/3 w-full relative overflow-hidden'>
                  <Image src='/bbm.jpg'  fill alt="" className='object-cover transform -skew-y-3 absolute -mt-8'  />
                </div>
                <div  className='h-1/3 flex flex-col gap-10'>
                  <span className='text-sky-600 text-2xl font-semibold px-4'>
                    BBM
                  </span>
                  <div className='flex flex-row justify-between p-4 items-center text-xl text-gray-400 border-t-[1px] m-2'>
                    <div className='flex gap-4'>
                        <FaRegClock />
                        <span>120</span>
                    </div>
                    <div className='flex gap-4'>
                      <FaBook />
                      <span>40</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='h-[500px] w-2/3 mx-auto lg:w-full gap-6 flex flex-col p-2  transition-all duration-300 hover:scale-105 hover:shadow-inner cursor-pointer shadow-lg border-[1px] border-gray-300 rounded-lg bg-gray-200'>
                <div className='h-2/3 w-full relative overflow-hidden'>
                  <Image src='/bbs.jpg'  fill alt="" className='object-cover transform -skew-y-3 absolute -mt-8'  />
                </div>
                <div  className='h-1/3 flex flex-col gap-10'>
                  <span className='text-sky-600 text-2xl font-semibold px-4'>
                    BBS
                  </span>
                  <div className='flex flex-row justify-between p-4 items-center text-xl text-gray-400 border-t-[1px] m-2'>
                    <div className='flex gap-4'>
                        <FaRegClock />
                        <span>120</span>
                    </div>
                    <div className='flex gap-4'>
                      <FaBook />
                      <span>20</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Courses