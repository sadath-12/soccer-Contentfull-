import Link from 'next/link'
import { truncate, turnToSlug } from '../../hooks/functions'


const GalleryLayout = ({ galleryData }) => {
    const dummyText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere obcaecati sunt necessitatibus, fugiat tenetur, impedit harum modi hic, consequatur dolorem eveniet est rem quos. Incidunt libero dolore dolor quo praesentium.`
    return (
        <div className='grid mx-auto p-4 max-w-[70rem] grid-cols-1 md:grid-cols-2 gap-8'>
            {galleryData.map(({ imageUrl, heading, date }, i) => (
                <Link
                    key={i}
                    href={`/gallery/${turnToSlug(heading)}`}

                >
                    <a
                        data-aos='fade-up'
                        data-aos-duration="800"
                        className='max-w-[35rem] mx-auto cursor-pointer transition-all group duration-500 overflow-hidden relative'>
                        <img src={imageUrl} className='group-hover:scale-110 transition-all duration-500' />
                        <div
                            style={{
                                background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
                            }}
                            className="absolute right-[-10rem]  transition-all duration-500 group-hover:right-0 top-12 py-2 px-4">

                            <h1 className='text-sm text-white md:text-xl'>
                                {date}
                            </h1>
                        </div>
                        <div
                            style={{
                                background: `linear-gradient(rgba(0, 144, 200,0.8) 2%,rgba(0,144,200,0.7) 30%)`
                            }}
                            className="w-full absolute bottom-0 transition-all duration-500   backdrop-blur-lg p-2 md:p-3 text-white">
                            <h1 className='text-base md:text-xl'>
                                {truncate(heading, 30)}
                            </h1>
                            <p className='group-hover:flex hidden text-xs md:text-sm  text-white mt-1'>
                                {truncate(dummyText, 110)}

                            </p>
                        </div>
                    </a >
                </Link >
            ))}
        </div >
    )
}

export default GalleryLayout