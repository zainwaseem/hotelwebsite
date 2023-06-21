import React from 'react'
import BookingCard from './BookingCard';
import { rooms } from '../../RoomData';

function Booking(props) {



    return (
        <div class="flex items-center bg-white w-screen min-h-screen" style={{ fontFamily: 'Muli' }}>
            <div class="container ml-auto mr-auto flex flex-wrap items-start">
                {/* <div class="w-full pl-5 lg:pl-2 mb-4 mt-4">
                    <h1 class="text-3xl lg:text-4xl text-gray-700 font-extrabold">
                        Room
                    </h1>
                </div> */}
                {rooms.map((room, index) => (
                    <BookingCard
                        key={index}
                        image={room.image}
                        roomType={room.roomType}
                        availability={room.availability}
                        price={room.price}
                        amenities={room.amenities}
                        occupancyStatus={room.occupancyStatus}
                        props={props}
                    />

                ))}

            </div>
        </div>
    );
}

export default Booking