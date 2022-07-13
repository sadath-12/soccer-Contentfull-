import { Drawer, IconButton, makeStyles } from '@material-ui/core'
import Link from 'next/link'
import { AiFillGithub, AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'
import { navData } from '../dummyData'
import { motion } from 'framer-motion'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineChevronDoubleRight } from 'react-icons/hi'
import { getContentById, getSlugByLink } from '../../hooks/functions'


const NavDrawer = ({ open, setOpen, settings }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [showSubMenu, setShowSubMenu] = useState('')
    const { logo, navigation, gameLogo } = settings[0].fields

    return (
        <div className='flex overflow-hidden lg:hidden'>
            <Drawer
                open={open}
                anchor='left'
                onClose={handleClose}
            >
                <div
                    style={{ backgroundImage: `linear-gradient(rgba(255,255,255,0.6),rgba(255,255,255,0.6))` }}
                    className="h-full overflow-hidden max-h-screen ">
                    <div
                        className="min-w-[20rem] backdrop-blur-md  flex flex-col h-screen items-stretch">
                        <div
                            onClick={() => setOpen(false)} className={`w-fit ml-auto cursor-pointer flex lg:hidden hover:rotate-180 font-medium bg-themeBlue  text-white text-lg  p-3 transition-all duration-300 `}>
                            <RiCloseLine />
                        </div>
                        <ul className='flex-col px-6 pt-6 md:hidden flex'>
                            {navigation?.map(({ fields }, i) => (
                                <React.Fragment key={i}>
                                    <motion.li
                                        initial={{ x: -200, y: 0 }}
                                        animate={{ x: 0, y: 0 }}
                                        transition={{
                                            duration: "0.8",
                                            delay: `0.${i + 1}`,
                                            type: 'tween'
                                        }}
                                        className='flex py-3 z-20 justify-between'>
                                        <NavigationItem fields={fields} />
                                        {fields?.navigationItems &&
                                            <div onClick={() => setShowSubMenu(showSubMenu === fields.displayTitle ? '' : fields.displayTitle)} className="ml-auto transition-all duration-500 hover:text-themeBlue cursor-pointer">
                                                <HiOutlineChevronDoubleRight className={`${showSubMenu === fields.displayTitle ? 'rotate-90' : ''}`} />
                                            </div>
                                        }
                                    </motion.li>
                                    {fields?.navigationItems &&
                                        <div className={`pb-2 h-fit mt-2 ${showSubMenu === fields.title ? ' opacity-100 flex flex-col' : 'opacity-0 hidden'} transition-all duration-500 px-4 z-10  space-y-4 `}>
                                            {fields?.navigationItems && fields?.navigationItems.map(({ sys }, i) => (
                                                <React.Fragment key={i}>
                                                    <motion.li
                                                        key={i}
                                                        initial={{ x: 200, y: -200 }}
                                                        animate={{ x: 0, y: 0 }}
                                                        transition={{
                                                            duration: "0.8",
                                                            delay: `0.${i + 1}`,
                                                            type: 'tween'
                                                        }}
                                                        className='flex justify-between'>
                                                        <SubmenuItem sys={sys} />
                                                    </motion.li>
                                                </React.Fragment>
                                            ))}
                                        </div>
                                    }
                                </React.Fragment>
                            ))}
                        </ul>
                    </div >
                </div >
            </Drawer >
        </div >
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
            <a className={` cursor-pointer relative link-effect w-fit`}>
                {fields.displayTitle}
            </a>
        </Link>
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
        <Link href={link.slug || '/'}>
            <a className='text-sm relative link-effect w-fit '>
                {link.displayTitle}
            </a>
        </Link>
    )
}

export default NavDrawer