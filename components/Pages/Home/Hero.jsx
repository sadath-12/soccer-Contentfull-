import React, { useEffect, useState } from 'react'
import Button from '../../utils/Button'
import Link from 'next/link'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { motion } from "framer-motion"

const Hero = ({ sliderContent }) => {
    const [sliderData, setSliderData] = useState([])
    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    useEffect(() => {
        const { fields } = sliderContent
        const items = fields?.body?.filter(field => (field.fields.title === 'Home Slider'))
        setSliderData(items)
    }, [sliderContent])

    const getImageUrl = (fields) => {
        const defaultImage = sliderData[0]?.fields?.slides[0]?.fields?.image?.fields?.file?.url
        const imageUrl = fields?.image?.fields?.file?.url ? fields?.image?.fields?.file?.url : defaultImage
        return imageUrl
    }
    return (
        <motion.div
            className='h-screen'
            initial="hidden"
            animate="visible"
            transition={{
                delay: 0.2,
                x: { type: "spring", stiffness: 100 },
                default: { duration: 1 },
            }}
            variants={variants}
        >
            <Swiper
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >

                {sliderData[0]?.fields?.slides?.map(({ fields }, i) => (
                    <SwiperSlide
                        key={i}
                    >
                        <div
                            style={{
                                backgroundImage: `url(${getImageUrl(fields)})`
                            }}
                            className='!bg-cover flex items-end justify-center !bg-center !bg-fixed h-screen'
                        >
                            <div className="flex mb-[20vh] flex-col space-y-8">
                                <h1
                                    className='text-2xl text-center md:text-3xl lg:text-4xl xl:text-5xl text-white  font-black ' style={{ textShadow: '0 0 10px #212121' }}>
                                    {fields.displayTitle}
                                </h1>
                                {fields.button &&
                                    <Link href={fields.button.fields.url || '/'} className="mx-auto">
                                        <a className='mx-auto'>
                                            <Button text={fields.button.fields.displayTitle} />
                                        </a>
                                    </Link>
                                }
                            </div>
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </motion.div >
    )
}

export default Hero