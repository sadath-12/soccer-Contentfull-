import React from 'react'
import AOS from 'aos'
import Layout from '../../components/Layout'
import TeamMembersLayout from '../../components/Gallery/TeamMembersLayout'
import { playersData } from '../../components/dummyData'
import "aos/dist/aos.css";
import { createClient } from 'contentful'
import Head from 'next/head'

const index = ({ settings }) => {
    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Layout settings={settings}>
            <Head>
                <title>Mannschaften | FC Ataspor</title>
            </Head>
            <div className='bg-themeBlack min-h-screen flex flex-col space-y-16 lg:space-y-24 pt-24 md:pt-32 overflow-hidden py-16 '>
                <div className='flex flex-col space-y-12  container items-center'>
                    <h1 className='text-2xl md:text-3xl text-white lg:text-4xl'>Spieler 1. Mannschaft</h1>
                    <TeamMembersLayout playersData={playersData} />
                </div>
                <div className='flex flex-col space-y-12  container items-center'>
                    <h1 className='text-2xl md:text-3xl text-white lg:text-4xl'>Spieler Senioren 30+</h1>
                    <TeamMembersLayout playersData={playersData} />
                </div>
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