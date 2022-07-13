import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
const GalleryCarouselLayout = ({ images }) => {
    return (
        <div className="container p-4">
            <Carousel>
                {images.map((imageUrl, i) => (
                    <div key={i} className='max-h-[40rem]'>
                        <img src={imageUrl} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default GalleryCarouselLayout