import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import EventList from '../../utils/Events/EventList'
const Events = ({ imageUrl, data }) => {
    const [eventsData, setEventsData] = useState([])
    const { fields } = data
    useEffect(() => {
        const events = fields.body.filter(bodyItem => (bodyItem.sys.contentType.sys.id === 'bigImageTeaser' && bodyItem.fields.description != null)) || []
        setEventsData(events)
    }, [data])
    console.log(data)
    const bigTitle = fields.body?.filter(bodyItem => (bodyItem.sys.id === '3wBxEa0dk17ZBvspl86nXA'))[0].fields.title
    const smallTitle = fields.body?.filter(bodyItem => (bodyItem.sys.id === 'WsB2MAHLSoEQqbXesfY6o'))[0].fields.title
    return (
        <div className='flex overflow-hidden flex-col pt-8 lg:pt-16 space-y-12'>
            <div
                data-aos="zoom-in"
                data-aos-duration={`600`}
                data-aos-delay={`200`}
                className='h-[80vh] relative w-full flex container items-center overflow-hidden justify-center'>
                <Image src={imageUrl} className='object-cover' layout='fill' />
            </div>
            <div className="bg-themeBlack py-12">
                <div className="text-center container flex flex-col space-y-12">
                    <div className="flex flex-col space-y-6">
                        <h1 className='text-3xl text-center text-white md:text-4xl'
                            data-aos="fade-up"
                            data-aos-duration={`600`}
                            data-aos-delay={`200`}
                        >{bigTitle}</h1>
                        <h1 className='text-1xl text-center text-white md:text-2xl'
                            data-aos="fade-up"
                            data-aos-duration={`600`}
                            data-aos-delay={`200`}
                        >{smallTitle}</h1>
                    </div>
                    <EventList eventsData={eventsData} title='Nächste Events' />
                </div>
            </div>
        </div>
    )
}

export default Events