'use client'
import React, {useState, useEffect,useRef } from 'react'
import validate from './../node_modules/uuid/dist/esm-browser/validate';

const Introduction = () => {
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
    <div className='w-full px-[10%]'>
        <div className='pt-10 flex-col lg:flex-row gap-4 flex justify-between items-center h-auto shadow-2xl rounded-lg p-2'>
            <div className=' text-center w-full lg:w-1/2 px-[10%]'>
              <div ref={ref} className={`transform transition duration-1000 flex flex-col justify-center items-center ${
              isVisible?'translate-y-0 opacity-100':'translate-y-8 opacity-0'
              }`}>
                 <p className='lg:text-7xl text-xl text-sky-800 leading-5 lg:leading-10 tracking-widest mb-3 font-black drop-shadow-2xl '>ACHS</p>
                 <p className='lg:text-2xl text-md text-sky-600 leading-2 lg:leading-8 tracking-widest font-bold'>Introduction</p>
            </div>
               
                <p className='lg:text-lg text-sm mt-4'>To be an innovative global leader in imparting competitive quality education by transforming lives that will change the world for the better, at whatever level of the human endeavour they are involved.</p>
            </div>
            <div className='lg:w-1/2 w-full'>
                <p className='text-justify text-gray-800 text-sm lg:text-md leading-7'>Asian College of Higher Studies (ACHS) is one of the finest colleges for IT and Management studies in Nepal. Association with industry, collaboration with the leading IT and Management companies of Nepal, state-of-the-art infrastructure, experienced faculty members, and other factors have made ACHS a great place for IT and Management education. ACHS’s unique and innovative standards of education are perpetuated by a world-class advisory board. The Advisory Board comprises some of the most distinguished names from various companies and academic institutions of Nepal. ACHS invites you to join the journey of IT and Management
                education. We take you to your final destination of a bright career through holistic development of attitude, skill, and knowledge. We offer four years of Information Technology and Management courses affiliated with Tribhuwan University for students who wish to make key transitions in their careers.</p>
                <button className='p-2 text-xs bg-rose-600 hover:bg-rose-800 text-white shadow-lg rounded-lg'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default Introduction