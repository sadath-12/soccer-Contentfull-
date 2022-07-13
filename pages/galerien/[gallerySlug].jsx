import React from 'react'
import AOS from 'aos'
import Layout from '../../components/Layout'
import GalleryCarouselLayout from '../../components/Gallery/GalleryCarouselLayout'
import { dummyImages } from '../../components/dummyData'
import { slugToText } from '../../hooks/functions'
import "aos/dist/aos.css";
import { createClient } from 'contentful'

const gallerySlug = ({settings}) => {
    //dummy slug
    const slug = 'Willkommen-beim-FC-ATASPOR'
    React.useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <Layout settings={settings}>
            <div className="min-h-screen w-full bg-themeBlack py-12 mt-12 md:mt-24">
                <h1 className='text-xl md:text-3xl text-white mb-4 text-center lg:text-4xl'>{slugToText(slug)}</h1>
                <GalleryCarouselLayout images={dummyImages} />
            </div>
        </Layout>
    )
}

export default gallerySlug

export async function getStaticProps(){

    const client = createClient({
      space:process.env.CONTENTFUL_SPACE_ID,
      accessToken:process.env.CONTENTFUL_ACCESS_KEY,
    })
    
    //pass the identity of model type
    const res = await client.getEntries({content_type:'settings'})
    
    return {
      props:{
        settings:res.items
      },
          // nextjs wil query the data in this time in seconds again and fetch the changes
      revalidate:1
    }
    
    }