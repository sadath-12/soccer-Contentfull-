import React from 'react'
import AOS from 'aos'
import Layout from '../../components/Layout'
import GalleryCarouselLayout from '../../components/Gallery/GalleryCarouselLayout'
import { dummyImages } from '../../components/dummyData'
import { getContentByType, slugToText } from '../../hooks/functions'
import "aos/dist/aos.css";
import { createClient } from 'contentful'
import { id } from 'date-fns/locale'

const gallerySlug = ({settings,galleryItem}) => {
    console.log(galleryItem, 'galleryItem')

    // ull continue ?? ill start tht design -- push the code 
    // ok
    const slug = 'Willkommen-beim-FC-ATASPOR'
    React.useEffect(() => {
        AOS.init();
    }, [])
    
    return (
        <Layout settings={settings}>
            <div className="min-h-screen w-full bg-themeBlack py-12 mt-12 md:mt-24">
                <h1 className='text-xl md:text-3xl text-white mb-4 text-center lg:text-4xl'>{slugToText(slug)}</h1>
                <GalleryCarouselLayout images={galleryItem && galleryItem[0].fields?.images} />
            </div>
        </Layout>
    )
}

export default gallerySlug



export async function getServerSideProps(context){

    const { params } = context;
    const { gallerySlug } = params;
    console.log(gallerySlug, 'gallerySlug')
    console.log(params, 'params')
        const client = createClient({
        space:process.env.CONTENTFUL_SPACE_ID,
        accessToken:process.env.CONTENTFUL_ACCESS_KEY,
        })

        const resData = await getContentByType('galleryGrid')
        const galleries = resData.items[0]
        const galleryItem=galleries.fields?.galleries && galleries.fields?.galleries.filter((gallery=>(gallery.fields.slug === gallerySlug)))
    const res = await client.getEntries({content_type:'settings'})

    
    
    return {
      props:{
        settings:res.items,
        galleries,
        galleryItem
      },
          // nextjs wil query the data in this time in seconds again and fetch the changes
 
    }
    
    }

  