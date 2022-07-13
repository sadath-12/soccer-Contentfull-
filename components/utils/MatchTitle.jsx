import React from 'react'

const MatchTitle = ({ smallTitle }) => {
    return (
        <div className="relative flex items-center justify-center container">
            <h1 className="py-3 text-base md:text-lg z-20 px-6 lg:px-12 rounded-full text-themeBlue bg-white">{smallTitle}</h1>
            <div className="absolute z-10 h-[1px] w-full inset-0 top-[50%] bg-white">
            </div>
        </div>
    )
}

export default MatchTitle