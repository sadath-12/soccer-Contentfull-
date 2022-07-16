import Link from 'next/link'
import { useEffect } from 'react'
import { truncate, turnToSlug } from '../../hooks/functions'


const GalleryLayout = ({ galleryData,i }) => {

   useEffect(()=>{

    },[galleryData])

    console.log('galleryData',galleryData)

    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati sunt necessitatibus, fugiat tenetur, impedit harum modi hic, consequatur dolorem eveniet est rem quos. Incidunt libero dolore dolor quo praesentium.`
    return (
      
            <div className='grid mx-auto p-4 max-w-[70rem]  gap-8'>
         
                <Link
                    key={i}
                    href={`/galerien/${turnToSlug(galleryData.slug)}`}
           
                > 
             
   <a
   data-aos='fade-up'
   data-aos-duration="800"
   className='max-w-[35rem] mx-auto cursor-pointer transition-all group duration-500 overflow-hidden relative'>
   <img src={`https:${galleryData.images[0].fields.file.url}`} className='group-hover:scale-110 transition-all duration-500' />
   <div
       style={{
           background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
       }}
       className="absolute right-[-10rem]  transition-all duration-500 group-hover:right-0 top-12 py-2 px-4">

       <h1 className='text-sm text-white md:text-xl'>
           {/* {date} */}
       </h1>
   </div>
   <div
       style={{
           background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
       }}
       className="w-full absolute bottom-0 transition-all duration-500   backdrop-blur-lg p-2 md:p-3 text-white">
       <h1 className='text-base md:text-xl'>
           {/* {truncate(fields.title, 30)} */}
           {galleryData.images[0].fields.title}
       </h1>
       <p className='group-hover:flex hidden text-xs md:text-sm  text-white mt-1'>
           {/* {truncate(fields.description, 110)} */}
           {galleryData.images[0].fields.description}

       </p>
   </div>
</a >
              
                 
                </Link >
        
           </div >



             
    )
}

export default GalleryLayout
// import Link from 'next/link'
// import { truncate, turnToSlug } from '../../hooks/functions'


// const GalleryLayout = ({ galleryData,i }) => {

//     const galleries = galleryData[i].images

//     console.log('galleryData',galleryData)

//     const dummyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati sunt necessitatibus, fugiat tenetur, impedit harum modi hic, consequatur dolorem eveniet est rem quos. Incidunt libero dolore dolor quo praesentium.`
//     return (
      
//             <div className='grid mx-auto p-4 max-w-[70rem] grid-cols-1 md:grid-cols-2 gap-8'>
//             {galleryData.images.map(({ fields}, i) => (
//                 <Link
//                     key={i}
//                     href={`/gallery/${turnToSlug(fields.title)}`}
           
//                 > 
//                     <a
//                         data-aos='fade-up'
//                         data-aos-duration="800"
//                         className='max-w-[35rem] mx-auto cursor-pointer transition-all group duration-500 overflow-hidden relative'>
//                         <img src={`https:${fields.file.url}`} className='group-hover:scale-110 transition-all duration-500' />
//                         <div
//                             style={{
//                                 background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
//                             }}
//                             className="absolute right-[-10rem]  transition-all duration-500 group-hover:right-0 top-12 py-2 px-4">
           
//                             <h1 className='text-sm text-white md:text-xl'>
//                                 {/* {date} */}
//                             </h1>
//                         </div>
//                         <div
//                             style={{
//                                 background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
//                             }}
//                             className="w-full absolute bottom-0 transition-all duration-500   backdrop-blur-lg p-2 md:p-3 text-white">
//                             <h1 className='text-base md:text-xl'>
//                                 {/* {truncate(fields.title, 30)} */}
//                                 {fields.title}
//                             </h1>
//                             <p className='group-hover:flex hidden text-xs md:text-sm  text-white mt-1'>
//                                 {/* {truncate(fields.description, 110)} */}
//                                 {fields.description}
           
//                             </p>
//                         </div>
//                     </a >
//                 </Link >
//             ))}
//            </div >
             
//     )
// }

// export default GalleryLayout