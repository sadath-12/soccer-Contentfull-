import React from 'react'

const Button = ({ text, bgColor, textColor }) => {
    return (
        <div className={`cursor-pointer group overflow-hidden w-fit py-4 px-8 relative transition-all duration-500 delay-100 	 ${bgColor ? bgColor : 'bg-white'} ${textColor ? textColor : 'text-themeBlue font-semibold '} `}>
            <p>{text}</p>
            <div className={`absolute h-full w-[0px] left-[-200px] group-hover:w-full transition-all duration-500 delay-100	 group-hover:left-0 flex items-center justify-center text-white bg-themeBlue inset-0 z-10`}>{text}</div>
        </div>
    )
}

export default Button