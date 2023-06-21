import React from 'react'
import Booking from '../components/Guests/Rooms/Booking'
import Navbar from '../components/Navbar'

function RoomPage() {
    return (
        <>
            <Navbar />
            <Booking props={'Guest'} />
        </>
    )
}

export default RoomPage