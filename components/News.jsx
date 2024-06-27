'use client'
import React, { useState, useEffect, useRef } from 'react'
import { NewsData } from './NewsData';
import Image from 'next/image';

const getMonthName = (monthNumber) => {
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[monthNumber - 1];
}

const News = () => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

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

    const newsItems = NewsData.map((news, index) => {
        const dateParts = news.date.split('/');
        const day = dateParts[2];
        const month = getMonthName(parseInt(dateParts[1]));
        const year = dateParts[0];

        return (
            <div className='flex flex-row w-full mt-2 rounded-lg bg-gray-400 p-2 items-center justify-center' key={index}>
                <div className='w-1/3 text-white text-center'>
                    <p className='text-xl font-bold '>{day}</p>
                    <p className='text-xl font-bold '>{month}</p>
                </div>
                <div className='w-2/3 flex flex-col'>
                    <p><span className='text-white text-sm'>Title:</span> <span className='text-gray-800 text-xs'>{news.title}</span></p>
                    <p><span className='text-white text-sm'>Description:</span> <span className='text-gray-800 text-xs'>{news.description}</span></p>
                </div>
            </div>
        );
    });

    return (
        <>
            <div className='w-full transition ease-in-out duration-300 mt-20'>
                <div className='w-full px-[10%] flex flex-col justify-between items-center top-0 sm:top-14 relative'>
                    <div ref={ref} className={`transform transition duration-1000 flex flex-col justify-center items-center ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                    }`}>
                        <p className='lg:text-7xl text-xl text-sky-800 leading-5 lg:leading-10 tracking-widest mb-3 font-black drop-shadow-2xl'>News & <span className='text-rose-500'>Events</span></p>
                    </div>
                    <div className='grid grid-cols-1 sm:grid-cols-2 w-full gap-4 mt-4 mb-4'>
                        <div>
                            <p className='text-sky-500 font-bold'>News</p>
                            <div className='w-full'>
                                {newsItems}
                            </div>
                        </div>
                        <div className='flex flex-col w-full'>
                            <p className='text-rose-500 font-bold'>Events</p>
                            <div className='flex items-center justify-between h-[300px] mt-2 rounded-lg shadow-xl bg-rose-400'>
                                <div className='w-1/2 h-full relative rounded-lg '><Image src='/csit.jpg'  fill alt="" className='object-cover rounded-l-lg'  /></div>
                                <div className='w-1/2 p-4 '>
                                    <p><span className='text-white text-sm'>Title:</span> <span className='text-gray-800 text-xs'>Holi Blast 2024</span></p>
                                    <p><span className='text-white text-sm'>Description:</span> <span className='text-gray-800 text-xs'>ACHS Present Holi  Blast 2024</span></p>
                                    <p><span className='text-white text-sm'>Venue</span> <span className='text-gray-800 text-xs'>ACHS Premises</span></p>
                                    <p><span className='text-white text-sm'>Date:</span> <span className='text-gray-800 text-xs'>14th Falgun</span></p>
                                    <p><span className='text-white text-sm'>Time:</span> <span className='text-gray-800 text-xs'>10am onwards</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default News