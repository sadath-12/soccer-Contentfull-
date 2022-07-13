import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

const index = ({ children, settings }) => {
    return (
        <>
            <Navbar settings={settings} />
            <main>
                {children}
            </main>
            <Footer settings={settings} />
        </>
    )
}

export default index