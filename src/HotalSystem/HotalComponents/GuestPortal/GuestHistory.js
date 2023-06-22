import { useState, useEffect } from 'react';

function GuestHistory() {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        // Load booking history from browser storage (e.g., localStorage)
        const savedBookings = JSON.parse(localStorage.getItem('bookings'));
        if (savedBookings) {
            setBookings(savedBookings);
        }
    }, []);

    const handleBooking = (room) => {
        const newBooking = {
            room,
            timestamp: new Date().toLocaleString(),
        };

        // Save the new booking to the history
        const updatedBookings = [...bookings, newBooking];
        setBookings(updatedBookings);

        // Store the updated booking history in browser storage
        localStorage.setItem('bookings', JSON.stringify(updatedBookings));
    };

    return (
        <div>
            <h1>Booking History</h1>
            {bookings.length === 0 ? (
                <p>No bookings yet.</p>
            ) : (
                <ul>
                    {bookings.map((booking, index) => (
                        <li key={index}>
                            <div>Room: {booking.room}</div>
                            <div>Timestamp: {booking.timestamp}</div>
                        </li>
                    ))}
                </ul>
            )}

            <button onClick={() => handleBooking('Room 1')}>Book Room 1</button>
            <button onClick={() => handleBooking('Room 2')}>Book Room 2</button>
            <button onClick={() => handleBooking('Room 3')}>Book Room 3</button>
        </div>
    );
}


export default GuestHistory