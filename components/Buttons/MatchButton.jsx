import React from 'react'
import { BsArrowRight } from 'react-icons/bs'


const MatchButton = ({ btnColor, btnName }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration={`600`}
      data-aos-delay={`700`}
      className=' w-full'
    >
      <div

        className={` ${btnColor ? btnColor : 'bg-themeBlack'}   flex items-center group justify-center text-white hover:opacity-90 transition-all duration-500 cursor-pointer py-4 text-xs md:text-sm w-full`}>
        {btnName}
        <BsArrowRight className='transition-all duration-500 ml-2  group-hover:ml-4' />
      </div>
    </div>
  )
}

export default MatchButton