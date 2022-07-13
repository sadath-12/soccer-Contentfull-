import Link from 'next/link'
import React, { useEffect, useState } from 'react'
const Sponsors = ({ data }) => {
    const [threeSmallSponsers, setThreeSmallSponsers] = useState([])
    const [twoMedSponsers, setTwoMedSponsers] = useState([])
    const [bigSponsors, setBigSponsors] = useState([])

    const bgUrl = '/images/Home/score-banner.webp'
    useEffect(() => {
        const thirdRow = data.fields.body.filter(bodyItem => (bodyItem.sys.id === '1O4roDUprh7oXXwoMWY4qj'))[0]?.fields.sponsors
        const secondRow = data.fields.body.filter(bodyItem => (bodyItem.sys.id === '76QrfCPjDpPHcsQ8z1IVia'))[0]?.fields.sponsors
        const firstBigSponsor = data.fields.body.filter(bodyItem => (bodyItem.sys.id === '5CuApn3rgSJITOhckjejF1'))[0]?.fields.sponsors
        setThreeSmallSponsers(thirdRow)
        setTwoMedSponsers(secondRow)
        setBigSponsors(firstBigSponsor)
    }, [data])
    return (

        <div
            style={{
                backgroundImage: `url(/images/Home/score-banner.webp)`
            }
            }
            className='!bg-cover overflow-hidden py-16 !bg-center !bg-fixed w-full' >
            <div className="max-w-[65rem] mx-auto justify-center flex space-y-8 flex-col h-full">
                <h1 className='text-3xl text-center text-white md:text-4xl'
                    data-aos="fade-up"
                    data-aos-duration={`600`}
                    data-aos-delay={`200`}
                >Sponsoren</h1>
                <div className="flex flex-col space-y-8">
                    {/* <div className="grid grid-cols-7">
                        <div className="col-span-2"></div>
                        <div className="col-span-3">
                            {bigSponsors.slice(0, 1).map(({ fields }, i) => (
                                <a
                                    data-aos="fade-up"
                                    data-aos-duration={`600`}
                                    data-aos-delay={`300`}
                                    key={i} target='_blank' href={fields.link?.fields.url || '/'} style={{
                                        borderRadius: '0 0 5px 5px'
                                    }} className='border-t-4 flex items-center justify-center border-themeBlue relative shadow-3xl bg-white' >
                                    <img src={fields.bild.fields.file.url} className='object-contain' />
                                </a>
                            ))}
                        </div>
                        <div className="col-span-2"></div>
                    </div> */}
                    <div className="grid-cols-2 grid max-w-[50rem] mx-auto gap-8">
                        {twoMedSponsers?.map(({ fields }, i) => (

                            <a
                                data-aos="fade-up"
                                data-aos-duration={`600`}
                                data-aos-delay={`${i + 2}00`}
                                key={i} target='_blank' href={fields.link?.fields.url || '/'} style={{
                                    borderRadius: '0 0 5px 5px'
                                }} className='border-t-4 flex items-center justify-center border-themeBlue relative shadow-3xl bg-white' >
                                <img src={fields.bild.fields.file.url} className='object-contain' />
                            </a>
                        ))}
                    </div>
                    <div className="grid-cols-3 grid gap-8">
                        {threeSmallSponsers?.map(({ fields }, i) => (

                            <a
                                data-aos="fade-up"
                                data-aos-duration={`600`}
                                data-aos-delay={`${i + 2}00`}
                                key={i} target='_blank' href={fields.link?.fields.url || '/'} style={{
                                    borderRadius: '0 0 5px 5px'
                                }} className='border-t-4 flex items-center justify-center border-themeBlue relative shadow-3xl bg-white' >
                                <img src={fields.bild.fields.file.url} className='object-contain' />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sponsors