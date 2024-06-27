'use client'
import React, {useState, useEffect,useRef } from 'react'
import Image from 'next/image'
import {FaRegClock} from 'react-icons/fa6'
import {FaBook} from 'react-icons/fa'



const Life = () => {
  const [isVisible, setIsVisible]=useState(false)
  const ref=useRef(null);

  const [isModalOpen,setIsModalOpen]=useState(false)

  const openModal=()=>{
    setIsModalOpen(true)
  }
  const closeModal=()=>{
    setIsModalOpen(false)
  }

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
        <div className='w-full  transition ease-in-out duration-300 mt-10'>
          <div className='w-full px-[10%] flex flex-col justify-between items-center top-0 sm:top-14 relative '>
            <div ref={ref} className={`transform transition duration-1000 flex flex-col justify-center items-center mb-10  ${
              isVisible?'translate-y-0 opacity-100':'translate-y-8 opacity-0'
            }`}>
                <p className='lg:text-7xl text-xl text-sky-800 leading-5 lg:leading-10 tracking-widest mb-3 font-black drop-shadow-2xl'>Life <span className='text-rose-500'>@ ACHS</span></p>
            </div>
            <div className='flex flex-col lg:flex-row w-full justify-between items-center [t-4 gap-6 sm:gap-0'>
                <div className='relative flex max-w-full w-full items-center justify-center'>Gallary</div>
                <div className='relative overflow-hidden flex items-center justify-center max-w-full w-full'>Video 1</div>
                <div className='relative overflow-hidden flex items-center justify-center max-w-full w-full'>Video 2</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Life