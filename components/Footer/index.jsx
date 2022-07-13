import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FooterLinks } from '../dummyData'
import Logo from '../utils/Logo'
import { BsChevronRight } from 'react-icons/bs'
import { getSlugByLink } from '../../hooks/functions'

const index = ({ settings }) => {
    const { footerLinksLeft, footerLinksRight, logo, footerTextLogo } = settings[0].fields
    const footerText = footerTextLogo.content[0].content[0].value
    const logoUrl = logo?.fields?.file?.url
    return (
        <div className="w-full pt-12 lg:pt-16 bg-themeBlue">

            <div
                data-aos="fade-right"
                data-aos-duration={`600`}
                data-aos-delay={`200`}
                className='grid mb-6 grid-cols-1 container px-8 md:px-0  md:grid-cols-3'>
                <div className="w-full items-start flex flex-col space-y-4">
                    <Logo src={logoUrl} />
                </div>
            </div>
            <div className='grid grid-cols-1 space-y-6 md:space-y-0 pb-12 container px-8 md:px-0 md:grid-cols-3'>
                <div className="w-full items-start flex flex-col space-y-1">

                    {footerText.split('\n').map(textPieces => (
                        <p
                            key={textPieces}
                            data-aos="fade-right"
                            data-aos-duration={`600`}
                            data-aos-delay={`300`}
                            className='text-white text-base md:text-lg '>
                            {textPieces}
                        </p>
                    ))}
                </div>
                <div className="w-full items-start flex flex-col space-y-4">
                    <ul className='space-y-2'>
                        {footerLinksLeft.map(({ fields }, i) => (
                            <li
                                data-aos="fade-right"
                                data-aos-duration={`600`}
                                data-aos-delay={`${i + 4}00`}
                                key={i}>

                                <FooterNavigationItem fields={fields} />
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full items-start flex flex-col space-y-4">
                    <ul className='space-y-2'>
                        {footerLinksRight.map(({ fields }, i) => (
                            <li
                                data-aos="fade-right"
                                data-aos-duration={`600`}
                                data-aos-delay={`${i + 4}00`}
                                key={i}>
                                <FooterNavigationItem fields={fields} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="bg-themeBlack mt-6 py-4">
                <div className="container text-white px-8 md:px-0">
                    Copyright &copy; Team FC ATASPOR
                </div>
            </div>
        </div>
    )
}


const FooterNavigationItem = ({ fields }) => {
    const [link, setLink] = useState('')
    useEffect(() => {

        const getLink = async () => {
            if (fields.link) {
                const slug = await getSlugByLink(fields.link.sys.id)
                setLink(slug)
            } else {
                setLink(fields.url)
            }
        }
        getLink()
    }, [])
    return (
        <>
            {
                fields.link ?
                    <Link href={link || '/'}  >
                        <a className='flex hover:space-x-4 group transition-all duration-500 items-center text-white text-base md:text-lg hover:opacity-80'>
                            <BsChevronRight className='mr-2 group-hover:mr-3 transition-all duration-500' />
                            <span> {fields.displayTitle}</span>
                        </a>
                    </Link >
                    :
                    <a href={link} target='_blank' className='flex hover:space-x-4 group transition-all duration-500 items-center text-white text-base md:text-lg hover:opacity-80'>
                        <BsChevronRight className='mr-2 group-hover:mr-3 transition-all duration-500' />
                        <span> {fields.displayTitle}</span>
                    </a>
            }
        </>
    )
}

export default index