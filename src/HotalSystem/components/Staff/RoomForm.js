import React, { useState } from 'react';

const RoomForm = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [roomType, setRoomType] = useState('');
    const [availability, setAvailability] = useState('');
    const [price, setPrice] = useState('');
    const [amenities, setAmenities] = useState('');
    const [occupancyStatus, setOccupancyStatus] = useState('');
    const [showToast, setShowToast] = useState(false);


    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const roomData = {

            roomType,
            availability,
            price,
            amenities: amenities.split(',').map((amenity) => amenity.trim()),
            occupancyStatus,

        };

        // onSubmit(roomData);
        // Reset the form fields
        setSelectedImage(null);
        setRoomType('');
        setAvailability('');
        setPrice('');
        setAmenities('');
        setOccupancyStatus('');
        // console.log(RoomType)
        setShowToast(true);
        setTimeout(() => setShowToast(false), 4000)
    };

    return (<div>
        {showToast && (
            <div className="bg-green-500 text-white text-center py-2 px-4 mb-4">
                Room data submitted successfully!
            </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">

            <div className="mb-4">
                <label className="block text-gray-700 font-bold mb-2" htmlFor="image">
                    Image:
                </label>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    id="image"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"

                    required
                />
                {selectedImage && (
                    <div>
                        <img src={selectedImage} alt="Selected" className="rounded-lg" />
                    </div>
                )}

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
                    onChange={(e) => setRoomType(e.target.value)}
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
                    onChange={(e) => setAvailability(e.target.value)}
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
                    onChange={(e) => setPrice(e.target.value)}
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
                    onChange={(e) => setAmenities(e.target.value)}
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
                    onChange={(e) => setOccupancyStatus(e.target.value)}
                    required
                />
            </div>
            <div className="flex items-center justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Room
                </button>
            </div>
        </form>
    </div>
    );
};

export default RoomForm;
