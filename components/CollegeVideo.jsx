import React from 'react'


const CollegeVideo = () => {
  return (
    <>
        <div className='w-full aspect-w-16 aspect-h-9 h-auto  z-0 -mt-6 md:-mt-7 lg:-mt-11 '>
            <div className=' w-full h-auto aspect-w-16 aspect-h-9'>
                <video src="/admissionvideo.mp4"
                    className='w-full'
                    width="320"
                    height="240"
                    controls
                    autoPlay
                    muted
                    loop
                >
                    Your Browser does not support the video tag.
                </video>
            </div>
        </div>
    </>
  )
}

export default CollegeVideo