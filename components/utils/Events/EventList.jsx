import React from 'react'
import EventItem from './EventItem'

const EventList = ({ eventsData }) => {
    return (
        <div className='flex px-6 flex-col space-y-12'>
            {eventsData.map((event, i) => (
                <EventItem key={i} idx={i} event={event} />
            ))}
        </div>
    )
}

export default EventList