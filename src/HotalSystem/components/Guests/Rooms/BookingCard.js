import { useState } from 'react';
import { Link } from 'react-router-dom';

const BookingCard = ({ props, image, roomType, availability, price, amenities, occupancyStatus }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showToast, setShowToast] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkInDate === '' || checkOutDate === '') {
            setErrorMsg('Please enter both check-in and check-out dates.');
        } else if (checkInDate > checkOutDate) {
            setErrorMsg('Please correct  check-in and check-out date.');

        }
        else {

            // Perform other logic or API call for check-in/check-out
            // Reset form fields
            setCheckInDate('');
            setCheckOutDate('');
            setErrorMsg('');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000)
        }
    };
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
        // console.log(isModalOpen)
    };
    return (


        <>
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
                            {props.props === 'Guest' && <button onClick={toggleModal} class="rounded-full bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-10 h-10 flex ml-auto transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="stroke-current m-auto">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>}
                            {props.props === 'staff' &&
                                <>
                                    <button onClick={toggleModal} class="pl-2 pt-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-12 h-10 flex ml-auto transition duration-300">
                                        Edit
                                    </button>
                                    <button class="pl-2 pt-2 bg-purple-900 text-white hover:bg-white hover:text-purple-900 hover:shadow-xl focus:outline-none w-14 h-10 flex ml-2 transition duration-300">
                                        Delete
                                    </button></>}
                        </div>
                        {/* </Link> */}
                    </div>
                </div>
            </div>


            {
                isModalOpen && props.props === 'Guest' && <div id="modal">
                    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0  " >
                        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-900 opacity-75" />
                            </div>
                            <span className=" sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="max-w-md mx-auto">
                                        <h2 className="text-center text-2xl font-bold mb-4">Check-In/Check-Out</h2>
                                        {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}
                                        {showToast && <div className="text-green-500 mb-4">Your Room has been Booked</div>}
                                        <form >
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="checkInDate">
                                                    Check-In Date:
                                                </label>
                                                <input
                                                    type="date"
                                                    id="checkInDate"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={checkInDate}
                                                    onChange={(e) => setCheckInDate(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="checkOutDate">
                                                    Check-Out Date:
                                                </label>
                                                <input
                                                    type="date"
                                                    id="checkOutDate"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={checkOutDate}
                                                    onChange={(e) => setCheckOutDate(e.target.value)}
                                                    required
                                                />
                                            </div>

                                        </form>
                                    </div></div>
                                <div className="bg-gray-200 px-4 py-3 text-right">
                                    <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" onClick={toggleModal}><i className="fas fa-times"></i> Cancel</button>
                                    <button type="submit" onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i>Booking</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            {
                isModalOpen && props.props === 'staff' && <div id="modal">
                    <div className="fixed z-10 overflow-y-auto top-0 w-full left-0  " >
                        <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity">
                                <div className="absolute inset-0 bg-gray-900 opacity-75" />
                            </div>
                            <span className=" sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                            <div className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full" >
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="max-w-md mx-auto">
                                        <h2 className="text-center text-2xl font-bold mb-4">Update Room Detail</h2>
                                        {/* {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>} */}
                                        {/* {showToast && <div className="text-green-500 mb-4">Your Room has been Booked</div>} */}
                                        <form
                                            //  onSubmit={handleSubmit}
                                            className="max-w-md mx-auto">

                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                                                    Image:
                                                </label>

                                                <input
                                                    type="file"
                                                    accept="image/*"
                                                    // onChange={handleImageUpload}
                                                    id="image"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                                                    required
                                                />

                                                <div className='w-20 '>
                                                    <img src={image} alt="Selected" className="rounded-lg " />
                                                </div>


                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="roomType">
                                                    Room Type:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="roomType"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={roomType}
                                                    // onChange={(e) => setRoomType(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="availability">
                                                    Availability:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="availability"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={availability}
                                                    // onChange={(e) => setAvailability(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="price">
                                                    Price:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="price"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={price}
                                                    // onChange={(e) => setPrice(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="amenities">
                                                    Amenities:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="amenities"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={amenities}
                                                    // onChange={(e) => setAmenities(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-4">
                                                <label className="block text-gray-700 font-bold mb-2" htmlFor="occupancyStatus">
                                                    Occupancy Status:
                                                </label>
                                                <input
                                                    type="text"
                                                    id="occupancyStatus"
                                                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    value={occupancyStatus}
                                                    // onChange={(e) => setOccupancyStatus(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            {/* <div className="flex items-center justify-center">
                                                <button
                                                    type="submit"
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                >
                                                    Add Room
                                                </button>
                                            </div> */}
                                        </form>
                                    </div></div>
                                <div className="bg-gray-200 px-4 py-3 text-right">
                                    <button type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                                        onClick={toggleModal}
                                    >
                                        <i className="fas fa-times"></i> Cancel</button>
                                    <button type="submit"
                                        // onClick={handleSubmit}
                                        className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i>Update</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
        </>



    );
};

export default BookingCard;
