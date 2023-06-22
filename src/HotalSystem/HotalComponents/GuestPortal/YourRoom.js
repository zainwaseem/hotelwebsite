import React, { useState } from 'react';
import { formatDate } from './utils'; // Helper function to format dates

const YourRoom = () => {
    // Dummy data for room bookings
    const [bookings, setBookings] = useState([
        {
            id: 1,
            roomNumber: '101',
            checkInDate: new Date('2023-07-01'),
            checkOutDate: new Date('2023-07-05'),
        },
        {
            id: 2,
            roomNumber: '202',
            checkInDate: new Date('2023-07-10'),
            checkOutDate: new Date('2023-07-15'),
        },
    ]);
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showToast, setShowToast] = useState(false);


    const [selectedBooking, setSelectedBooking] = useState(null);

    // Handle editing of a booking
    const handleEdit = (booking) => {
        setSelectedBooking(booking);
    };

    // Handle cancellation of a booking
    const handleCancel = (booking) => {
        setBookings((prevBookings) => prevBookings.filter((b) => b.id !== booking.id));
        setSelectedBooking(null);
    };

    // Handle saving changes to a booking
    const handleChangeDates = (id) => {
        // Implement your logic to save changes here
        if (checkInDate === '' || checkOutDate === '') {
            setErrorMsg('Please enter both check-in and check-out dates.');
            setTimeout(() => setErrorMsg(''), 4000)

        } else if (checkInDate > checkOutDate) {
            setErrorMsg('Please correct  check-in and check-out date.');
            setTimeout(() => setErrorMsg(''), 4000)


        } else {
            setSelectedBooking(null);
            setBookings((prevBookings) => {
                return prevBookings.map((booking) => {
                    if (booking.id === id) {
                        return { ...booking, checkInDate: checkInDate, checkOutDate: checkOutDate };
                    }
                    return booking;
                });

            });

        };
    }



    // Handle changes to check-in and check-out dates
    const handleDateChange = (event, type) => {
        const { value } = event.target;
        setSelectedBooking((prevBooking) => ({
            ...prevBooking,
            [type]: new Date(value),
        }));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">My Room Bookings</h1>
            {errorMsg && <div className="text-red-500 mb-4">{errorMsg}</div>}
            {showToast && <div className="text-green-500 mb-4">Your Room has been Booked</div>}

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {bookings.map((booking) => (
                    <div
                        key={booking.id}
                        className={`bg-white rounded-lg shadow p-4 ${selectedBooking && selectedBooking.id === booking.id ? 'border-blue-500 border-2' : ''
                            }`}
                    >
                        <div className="flex justify-between">
                            <h2 className="text-lg font-bold">Room {booking.roomNumber}</h2>
                            <button
                                className="text-blue-500 underline"
                                onClick={() => handleEdit(booking)}
                            >
                                Edit
                            </button>
                        </div>
                        <p className="text-gray-600 mb-2">
                            Check-in: {formatDate(booking.checkInDate)}
                        </p>
                        <p className="text-gray-600 mb-2">
                            Check-out: {formatDate(booking.checkOutDate)}
                        </p>
                        {selectedBooking && selectedBooking.id === booking.id && (
                            <div className="mt-4">
                                <label className="block mb-2">Check-in Date:</label>
                                <input
                                    type="date"
                                    className="border p-2 mb-2"
                                    // value={booking.checkInDate.toISOString().split('T')[0]}
                                    // value={checkInDate}
                                    onChange={(event) =>
                                        setCheckInDate(new Date(event.target.value))
                                    } />
                                <label className="block mb-2">Check-out Date:</label>
                                <input
                                    type="date"
                                    className="border p-2 mb-2"
                                    // value={checkOutDate}
                                    onChange={(event) =>
                                        setCheckOutDate(new Date(event.target.value))
                                    } />
                                <div className="flex justify-end">
                                    <button
                                        className="px-4 py-2 bg-blue-500 text-white rounded"
                                        onClick={() => handleChangeDates(booking.id)}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="ml-2 px-4 py-2 bg-red-500 text-white rounded"
                                        onClick={() => handleCancel(booking)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default YourRoom;
