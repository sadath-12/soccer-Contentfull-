import Link from 'next/link';
import React from 'react'
import Button from '../Button'

const EventItem = ({ event, idx }) => {
    const { fields } = event
    const imageUrl = fields.image?.fields.file.url || '/images/common/placeholder.png';
    const heading = fields.displayTitle || '';
    const smallText = fields?.description || '';
    const button = {
        btnText: fields.link?.fields.displayTitle,
        link: fields.link?.fields.url || '',
        show: fields.link ? true : false
    }
    return (
        <>
            <div className={`${idx % 2 === 1 && 'hidden'} items-center overflow-hidden grid gap-12 grid-cols-1 md:grid-cols-2`}>
                <div
                    data-aos="fade-right"
                    data-aos-duration={`600`}
                    data-aos-delay={`400`}
                    className="relative hiw-full h-full overflow-hidden">
                    <img
                        className='hover:scale-110 w-full h-full transition-all duration-500' src={imageUrl} />
                    <div className="absolute flex lg:hidden right-0 bottom-0 text-white  py-4 px-8 bg-themeBlue">
                        <h1 className='text-base lg:text-xl'>29, OCT 2022</h1>
                    </div>
                </div>
                <div className="relative flex items-center w-full h-full">
                    <div className="flex  text-white  text-left flex-col space-y-6">
                        <h1
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`500`}
                            className='text-xl md:text-2xl'>{heading}</h1>
                        <p
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-sm md:text-base md:max-w-[80%]'>{smallText}</p>
                        {button.show &&
                            <Link href={button.link}>
                                <a
                                    data-aos="fade-left"
                                    data-aos-duration={`600`}
                                    data-aos-delay={`700`}
                                >
                                    <Button text={button.btnText} />
                                </a>
                            </Link>
                        }
                    </div>
                    <div
                        style={{
                            borderRadius: '0 0 0 20px'
                        }}
                        data-aos="fade-right"
                        data-aos-duration={`600`}
                        data-aos-delay={`500`}
                        className="hidden lg:flex flex-col absolute right-0 top-0 p-6 bg-themeBlue text-white ">
                        <h1
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-2xl'>29</h1>
                        <h1
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`700`}
                            className='text-xs md:text-sm whitespace-nowrap'>OCT, 2020</h1>
                    </div>
                </div>
            </div>
            <div className={`${idx % 2 === 0 && 'hidden'} items-center overflow-hidden grid gap-12 grid-cols-1 md:grid-cols-2`}>
                <div
                    data-aos="fade-left"
                    data-aos-duration={`600`}
                    data-aos-delay={`400`}
                    className=" relative flex md:hidden w-full h-full overflow-hidden">
                    <img
                        className='hover:scale-110 w-full h-full transition-all duration-500' src={imageUrl} />
                    <div className="absolute flex lg:hidden right-0 bottom-0 text-white  py-4 px-8 bg-themeBlue">
                        <h1 className='text-base lg:text-xl'>29, OCT 2022</h1>
                    </div>
                </div>
                <div className="relative flex items-center w-full h-full">
                    <div className="flex  text-white  text-left flex-col space-y-6">
                        <h1
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`500`}
                            className='text-xl md:text-2xl'>{heading}</h1>
                        <p
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-sm md:text-base md:max-w-[80%]'>{smallText}</p>
                        <div
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`700`}
                        >
                            <Button text='Mehr Infos' />
                        </div>
                    </div>
                    <div
                        style={{
                            borderRadius: '0 0 0 20px'
                        }}
                        data-aos="fade-left"
                        data-aos-duration={`600`}
                        data-aos-delay={`500`}
                        className="hidden lg:flex flex-col absolute right-0 top-0 p-6 bg-themeBlue text-white ">
                        <h1
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`600`}
                            className='text-2xl'>29</h1>
                        <h1
                            data-aos="fade-left"
                            data-aos-duration={`600`}
                            data-aos-delay={`700`}
                            className='text-xs md:text-sm whitespace-nowrap'>OCT, 2020</h1>
                    </div>
                </div>
                <div

                    data-aos="fade-left"
                    data-aos-duration={`600`}
                    data-aos-delay={`400`}
                    className=" relative  md:flex hidden w-full h-full overflow-hidden">
                    <img

                        className='hover:scale-110 w-full h-full transition-all duration-500' src={imageUrl} />
                    <div className="absolute flex lg:hidden right-0 bottom-0 text-white  py-4 px-8 bg-themeBlue">
                        <h1 className='text-base lg:text-xl'>29, OCT 2022</h1>
                    </div>
                </div>
            </div>

        </>
    )
}

export default EventItem