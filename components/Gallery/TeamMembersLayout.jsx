import React, { useState } from 'react'
import Image from 'next/image'
import { truncate } from '../../hooks/functions'

const TeamMembersLayout = ({ playersData }) => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false)
    }, 2000);
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[75rem] gap-8 md:grid-cols-3 lg:grid-cols-4'>
            {playersData.map(({ name, jersey, role, imageUrl }, i) => (
                <div
                    key={i} className='flex  items-center mx-auto flex-col'>
                    <div
                        data-aos='fade-up'
                        data-aos-duration="800"
                        className="relative w-[15rem] h-[24rem] group overflow-hidden">
                        {loading ? <>
                            <div className="relative animate-pulse bg-[#555] w-[15rem] h-[24rem] group overflow-hidden">

                            </div>
                        </>
                            :
                            <>

                                <div className="absolute top-2 right-2 z-20 font-black text-gray-600 text-4xl opacity-70">{jersey}</div>
                                <Image layout='fill' src={`${imageUrl ? imageUrl : '/images/players/user-default.png'}`} className='transition-all duration-500 group-hover:scale-110 z-10 max-w-[14rem] w-full max-h-[20rem] object-cover' />
                                <div
                                    style={{
                                        background: `linear-gradient(rgba(0, 144, 200,0.1) 2%,rgba(0,144,200,1) 50%)`
                                    }}
                                    className="pt-5 pb-2 absolute bottom-0 z-20 w-full">
                                    <h1 className='text-lg text-center md:text-xl font-bold text-white'>
                                        {truncate(name, 22)}
                                    </h1>
                                    <div className="mx-auto max-w-[4rem] h-[2px] bg-white"></div>
                                    <p className='text-xs mt-1 md:text-sm font-semibold text-center text-white'>{role}</p>
                                </div>
                            </>}

                    </div>
                </div>
            ))}
        </div>
    )
}

export default TeamMembersLayout