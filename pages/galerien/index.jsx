import React from 'react'
import GalleryLayout from '../../components/Gallery/GalleryLayout'
import Layout from '../../components/Layout'
import { galleryData } from '../../components/dummyData'
import "aos/dist/aos.css";
import AOS from 'aos'
import { createClient } from 'contentful';
import Head from 'next/head';

const index = ({ settings }) => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Layout settings={settings}>
            <Head>
                <title>Gllerien | FC Ataspor</title>
            </Head>
            <div className="mt-16 min-h-[200vh] lg:min-h-screen w-full bg-themeBlack py-12 md:mt-24">
                <h1 className='text-2xl md:text-3xl text-white mb-12 text-center lg:text-4xl'>Galerie</h1>
                <GalleryLayout galleryData={galleryData} />
            </div>
        </Layout>
    )
}

export default index


export async function getStaticProps() {

    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    //pass the identity of model type
    const res = await client.getEntries({ content_type: 'settings' })

    return {
        props: {
            settings: res.items
        },
        // nextjs wil query the data in this time in seconds again and fetch the changes
        revalidate: 1
    }

}