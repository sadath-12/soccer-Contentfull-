// import React from 'react'
// import GalleryLayout from '../../components/Gallery/GalleryLayout'
// import Layout from '../../components/Layout'
// import { galleryData } from '../../components/dummyData'
// import "aos/dist/aos.css";
// import AOS from 'aos'
// import { createClient } from 'contentful';
// import Head from 'next/head';
// import { getContentById, getContentByType } from '../../hooks/functions';
// import { useState } from 'react';
// import { useEffect } from 'react';

// const index = ({ settings,galarein,galleryGrid }) => {

//     console.log('galleryGrid', galleryGrid)
//     const [allGalleries,setAllGalleries]=useState([])

//     console.log(galarein)
//     const pageTitle=galarein[0].fields.title
//   const galleries = galarein.map((item) => item.fields.body[1].fields.galleries);
//   console.log(galleries)


//   useEffect(()=>{

//     const manageGallery=async()=>{
//         let newGallerySet = new Set()
//     for (let i=0;i<galleries[0].length;i++){
//         const galleryDataById=await getContentById(galleries[0][i].sys.id)
//         newGallerySet.add(galleryDataById)
//     }

//     setAllGalleries(Array.from(newGallerySet))

// }
// manageGallery()


//   },[allGalleries])

//   console.log('gallery data',allGalleries)
   

//     React.useEffect(() => {
//         AOS.init();
//     }, [])
//     return (
//         <Layout settings={settings}>
//             <Head>
//                 <title>{pageTitle}</title>
//             </Head>
//             <div className="mt-16 min-h-[200vh] lg:min-h-screen w-full bg-themeBlack space-y-10 py-12 md:mt-24">
//             {allGalleries.map(({fields},i)=>(
//                 <div className='flex flex-col'>
//                 <h1 className='text-2xl md:text-3xl text-white mb-12 text-center lg:text-4xl'>{fields.displayTitle}</h1>
//                 <GalleryLayout galleryData={fields} />
//                 </div>
//                 ))}

//             </div>

//         </Layout>
//     )
// }

// export default index


// export async function getStaticProps() {

//     const client = createClient({
//         space: process.env.CONTENTFUL_SPACE_ID,
//         accessToken: process.env.CONTENTFUL_ACCESS_KEY,
//     })

//     //pass the identity of model type
//     const res = await client.getEntries({ content_type: 'settings' })
//     const pageData = await client.getEntries({ content_type: "page" });
//     const galleryGrid = await client.getEntries({content_type:"galleryGrid"})
//     const galarein = pageData.items.filter(
//         (item) => item.fields.slug === "galerien"
//       );

//     return {
//         props: {
//             settings: res.items,
//             galarein,
//             galleryGrid


//         },
//         // nextjs wil query the data in this time in seconds again and fetch the changes
//         revalidate: 1
//     }

// }


import React from 'react'
import GalleryLayout from '../../components/Gallery/GalleryLayout'
import Layout from '../../components/Layout'
import { galleryData } from '../../components/dummyData'
import "aos/dist/aos.css";
import AOS from 'aos'
import { createClient } from 'contentful';
import Head from 'next/head';
import { getContentById, getContentByType } from '../../hooks/functions';
import { useState } from 'react';
import { useEffect } from 'react';

const index = ({ settings,galarein,galleryGrid }) => {

    console.log('galleryGrid', galleryGrid)
    const [allGalleries,setAllGalleries]=useState([])

    console.log(galarein)
    const pageTitle=galarein[0].fields.title
//   const galleries = galarein.map((item) => item.fields.body[1].fields.galleries);


//   useEffect(()=>{

//     const manageGallery=async()=>{
//         let newGallerySet = new Set()
//     for (let i=0;i<galleries[0].length;i++){
//         const galleryDataById=await getContentById(galleries[0][i].sys.id)
//         newGallerySet.add(galleryDataById)
//     }

//     setAllGalleries(Array.from(newGallerySet))

// }
// manageGallery()


//   },[allGalleries])

const galleries = galleryGrid.map((gallery,i)=>gallery.fields.galleries)
console.log("props gallery",galleries)

useEffect(()=>{

},[galleryGrid])


   

    React.useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Layout settings={settings}>
            <Head>
                <title>{pageTitle}</title>
            </Head>
            <div className="mt-16 min-h-[200vh] lg:min-h-screen w-full bg-themeBlack space-y-10 py-12 md:mt-24">
            {galleries[0].map(({fields},i)=>(
                <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl md:text-3xl text-white mb-12 text-center lg:text-4xl'>{fields.displayTitle}</h1>
                <GalleryLayout galleryData={fields} i={i} />
                </div>
                ))}

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
    const pageData = await client.getEntries({ content_type: "page" });
    const galleryGrid = await client.getEntries({content_type:"galleryGrid"})
    const galarein = pageData.items.filter(
        (item) => item.fields.slug === "galerien"
      );

    return {
        props: {
            settings: res.items,
            galarein,
            galleryGrid:galleryGrid.items


        },
        // nextjs wil query the data in this time in seconds again and fetch the changes
        revalidate: 1
    }

}