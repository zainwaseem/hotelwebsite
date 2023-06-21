import React from 'react'
import Navbarstaff from '../../components/Staff/Navbarstaff'
import Booking from '../../components/Guests/Rooms/Booking'

function AvaliableRoom() {
    return (
        <>
            <Navbarstaff />
            <Booking props={'staff'} />
        </>
    )
}

export default AvaliableRoom