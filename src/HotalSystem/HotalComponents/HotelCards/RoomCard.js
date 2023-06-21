import React from 'react'
import { Link } from 'react-router-dom'

function RoomCard({ props, image, roomType, availability, price, amenities, occupancyStatus }) {
    return (
        <div class="w-full md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-5 lg:pl-2 lg:pr-2">
            <div class="bg-white rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
                <figure class="mb-2">
                    <img src={image} class="border-radius-2 h-64 ml-auto mr-auto" />
                </figure>
                <div class="rounded-lg p-4 bg-purple-700 flex flex-col">
                    <div className='h-40 '>
                        <h5 class="text-white text-2xl font-bold leading-none">
                            {roomType}
                        </h5>
                        <span class="text-xs text-gray-100 leading-none d-block">{availability}</span><br />
                        <span class="text-xs text-gray-100 leading-none d-block">{occupancyStatus}</span><br />
                        <p className="text-gray-100 mb-2">Amenities: {amenities.join(', ')}</p>

                    </div>
                    {/* <Link to='/Room/Booking'> */}
                    <div class="flex items-center">
                        <div class="text-lg text-white font-light">
                            {price}
                        </div>
                        {props === 'Guest' && <Link to='/RoomBooking'
                            // onClick={toggleModal}  
                            class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                                <>
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </>
                            </svg>
                        </Link>}
                        {props === 'Staff' &&
                            <>
                                <button
                                    // onClick={toggleModal}
                                    class="pl-2 pt-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-12 h-10 flex ml-auto transition duration-300">
                                    Edit
                                </button>
                                <button class="pl-2 pt-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-14 h-10 flex ml-2 transition duration-300">
                                    Delete
                                </button>
                            </>}
                    </div>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    )
}

export default RoomCard