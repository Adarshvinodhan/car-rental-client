import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const CarCard = ({ car }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/car/${car._id}`);
  };

  return (
    <div 
      onClick={handleCardClick} 
      className="max-w-sm mx-auto bg-white text-black shadow-lg rounded-lg overflow-hidden border border-gray-300 cursor-pointer hover:shadow-xl transition-shadow duration-300"
    >
      <img
        className="w-full h-48 object-cover"
        src={car.image}
        alt={`${car.make} ${car.model}`}
      />
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">
          {car.make} {car.model}
        </h2>
        <p className="text-gray-700 mb-4">{car.description}</p>
        <div className="flex justify-between items-center">
          <span
            className={`px-3 py-1 text-sm font-medium rounded-full ${
              car.availability ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {car.availability ? 'Available' : 'Sold Out'}
          </span>
        </div>
        <div className="mt-4">
          <span className="text-sm text-gray-500">Year: {car.year}</span>
          <span className="ml-4 text-sm text-gray-500">Color: {car.color}</span>
          <span className="ml-4 text-sm text-gray-500">Seats: {car.seat}</span> {/* Display number of seats */}
        </div>
        <div className="mt-6">
          <Link 
            to={`/booking/${car.id}`} 
            className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={(e) => e.stopPropagation()} // Prevents parent click event
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
