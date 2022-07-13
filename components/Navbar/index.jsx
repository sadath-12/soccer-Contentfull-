import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Logo from '../utils/Logo'
import NavDrawer from './NavDrawer'

import { motion } from "framer-motion"
import { VscMenu } from 'react-icons/vsc'
import { getSlugByLink, getContentById } from '../../hooks/functions'
import { useRouter } from 'next/router'

const index = ({ settings }) => {
    const { logo, navigation, gameLogo } = settings[0].fields
    const logoUrl = logo?.fields?.file?.url

    const [navOpen, setNavOpen] = useState(false)
    const [showSubmenu, setShowSubmenu] = useState('')


    return (
        <motion.header
            animate={{ x: 0, y: 0 }}
            initial={{ x: 0, y: -100 }}
            style={{
                background: `linear-gradient(rgba(255,255,255,0.9),rgba(255,255,255,0.9))`
            }}
            className='shadow-sm px-2 w-full z-50 py-4 md:py-0 h-[4rem] md:h-[6rem] backdrop-blur-md fixed inset-0'>
            <div className="w-0">
                <NavDrawer open={navOpen} setOpen={setNavOpen} settings={settings} />
            </div>
            <div className="px-4 md:px-0 container relative flex items-center h-full justify-between">
                <motion.div
                    initial={{ x: 0, y: -200 }}
                    animate={{ x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}

                    className="hidden md:flex shadow-xl relative bg-themeBlue pt-6 pb-3 px-3  items-center justify-center ">
                    <Logo src={logoUrl} />
                </motion.div>
                <Link href='/'>
                    <a className="flex md:hidden pt-4 px-2 pb-2 bg-themeBlue">
                        <img src={logoUrl} className='max-h-[4rem] w-fit' />
                    </a>
                </Link>
                <ul className='hidden md:flex h-full items-center space-x-10'>
                    {navigation?.map(({ fields }, i) => (
                        <motion.li
                            onMouseEnter={() => setShowSubmenu(fields.title)}
                            onMouseLeave={() => setShowSubmenu('')}
                            key={i}
                            initial={{ x: 0, y: -200 }}
                            animate={{ x: 0, y: 0 }}
                            transition={{ duration: 0.4, delay: `0.${i + 1}` }}
                            className={`relative  h-full flex group items-center justify-center duration-500 `}>
                            <NavigationItem fields={fields} />
                            <ul className={` ${showSubmenu === fields.title && fields?.navigationItems ? 'z-10 h-full overflow-visible flex flex-col' : 'h-0'} top-[100%] overflow-hidden h-0  transition-all  duration-500 absolute  inset-0 min-w-[13rem] w-full bg-white`}>
                                {fields?.navigationItems && fields?.navigationItems.map(({ sys }, i) => (
                                    <SubmenuItem sys={sys} key={i} />
                                ))}
                            </ul>
                        </motion.li>
                    ))}
                </ul>
                <div onClick={() => setNavOpen(!navOpen)} className="flex md:hidden">
                    <VscMenu className='text-2xl cursor-pointer hover:rotate-180 transition-all duration-500' />
                </div>
            </div>
        </motion.header>
    )
}


const SubmenuItem = ({ sys }) => {
    const [link, setLink] = useState({})

    useEffect(() => {
        const getLink = async () => {
            const { fields } = await getContentById(sys.id)
            setLink({ displayTitle: fields.displayTitle, slug: fields?.link?.fields?.slug })
        }
        getLink()
    }, [sys])
    return (
        <>
            <Link href={link.slug || '/'}>
                <a
                    className='bg-white hover:bg-themeblue border-b border-blue-200 shadow-lg px-4 py-2 hover:bg-themeBlue hover:text-white'>
                    {link.displayTitle}
                </a>
            </Link>
        </>
    )
}

const NavigationItem = ({ fields }) => {
    const [link, setLink] = useState('')
    useEffect(() => {
        const getLink = async () => {
            const slug = await getSlugByLink(fields.link.sys.id)
            setLink(slug)
        }
        getLink()
    }, [])
    return (
        <Link href={link === 'home' ? '/' : link}>
            <a className={`relative group-hover:text-themeBlue cursor-pointer `}>
                {fields.displayTitle}
            </a>
        </Link>
    )
}

export default index


