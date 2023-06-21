import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function BookRoom() {
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


            setCheckInDate('');
            setCheckOutDate('');
            setErrorMsg('');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 4000)
        }
    };
    return (

        <div id="modal">
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
                            <Link to='/Guest' type="button" className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2" ><i className="fas fa-times"></i> Cancel</Link>
                            <button type="submit" onClick={handleSubmit} className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"><i className="fas fa-plus"></i>Booking</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookRoom