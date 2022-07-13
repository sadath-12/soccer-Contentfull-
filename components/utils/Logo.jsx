import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ src }) => {
    return (
        <Link href='/'>
            <a>
                <img src={src} height={90} width={90} />
            </a>
        </Link>
    )
}

export default Logo