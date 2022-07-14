import React, { useState } from 'react'
import Image from 'next/image'
import { MatchData } from '../../dummyData'
import MatchTitle from '../../utils/MatchTitle'
import MatchComponent from '../../utils/MatchComponent'
 
const Third = ({imageUrl, games, data, matchData }) => {

    const bgImg = '/images/Home/score-banner.webp'
    const [slicedNumber, setSlicedNumber] = useState(0)
    const gamesGrid = data.fields.body.filter(bodyItem => (bodyItem.sys.contentType.id === 'gamesGrid'))
    console.log(games, 'games')
    return (
        <>
            <div className="overflow-hidden  pt-8 lg:pt-16">
                <div
                    data-aos="zoom-in"
                    data-aos-duration={`600`}
                    data-aos-delay={`200`}
                    className='h-[80vh] mb-12 relative w-full flex container items-center overflow-hidden justify-center'>
                    <Image src={imageUrl} className='object-cover' layout='fill' />
                </div>

                <div
                    style={{
                        backgroundImage: `url(${bgImg})`
                    }}
                    className="py-12 text-white !bg-cover w-full !bg-no-repeat">
                    <div className='flex container !text-center flex-col space-y-8'>
                        <h1
                            data-aos="fade-down"
                            data-aos-duration={`600`}
                            data-aos-delay={`300`}
                            className='text-2xl md:text-3xl'>Spielbetrieb 1. Mannschaft</h1>
                        {matchData.map(({ smallTitle, matches }, i) => (
                            <div key={i} className='flex flex-col space-y-12'>
                                <MatchTitle smallTitle={smallTitle} />
                                <div className="container flex justify-center">
                                    <div className="grid grid-cols-1 gap-8 w-full max-w-[60rem]">
                                        {matches.slice(Number(0 + slicedNumber), Number(7 + slicedNumber)).map((match, i) => (
                                            <div
                                                key={i}
                                                data-aos={i === 0 ? "fade-right" : 'fade-left'}
                                                data-aos-duration={`600`}
                                                data-aos-delay={`400`}
                                            >
                                                <MatchComponent
                                                    match={match} btnColor='bg-themeBlack' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Third