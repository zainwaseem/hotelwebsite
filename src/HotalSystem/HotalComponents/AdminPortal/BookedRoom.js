import React from 'react'
import { rooms } from '../Data/RoomData'
import RoomCard from '../HotelCards/RoomCard'

function BookedRoom() {
    return (
        <><div class="flex items-center bg-white w-screen min-h-screen" style={{ fontFamily: 'Muli' }}>
            <div class="container ml-auto mr-auto flex flex-wrap items-start">
                {rooms.map((room, index) => (
                    room.availability === 'Booked' &&
                    <RoomCard
                        key={index}
                        image={room.image}
                        roomType={room.roomType}
                        availability={room.availability}
                        price={room.price}
                        amenities={room.amenities}
                        occupancyStatus={room.occupancyStatus}
                        props='Guest'
                    />

                ))}

            </div>
        </div>
        </>
    )
}

export default BookedRoom