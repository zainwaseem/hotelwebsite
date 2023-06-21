import React from 'react'
import RoomCard from '../HotelCards/RoomCard'
import { rooms } from '../Data/RoomData'

function AvalibleRoom() {
    return (
        <>
            <div class="flex items-center bg-white w-screen min-h-screen" style={{ fontFamily: 'Muli' }}>
                <div class="container ml-auto mr-auto flex flex-wrap items-start">
                    {rooms.map((room, index) => (
                        room.availability === 'Available' &&
                        <RoomCard
                            key={index}
                            image={room.image}
                            roomType={room.roomType}
                            availability={room.availability}
                            price={room.price}
                            amenities={room.amenities}
                            occupancyStatus={room.occupancyStatus}
                            props='Staff'
                        />

                    ))}

                </div>
            </div>
        </>
    )
}

export default AvalibleRoom