import React, { useState, useEffect } from "react";
import api from "../axios";
import { useParams } from "react-router-dom";

const CarDetail = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch car details
  useEffect(() => {
    const fetchCar = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.get(`http://localhost:3000/api/car/${id}`);
        setCar(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to load car details.");
        setLoading(false);
      }
    };
    fetchCar();
  }, [id]);

  const handleBooking = () => {
    alert(`Booking confirmed for ${car.make} ${car.model}`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center p-4">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex justify-center">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-6">
        <img
          src={car.image}
          alt={`${car.make} ${car.model}`}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{`${car.make} ${car.model}`}</h1>
        <p className="text-gray-600 mb-4">{car.description}</p>
        <div className="space-y-2">
          <p>
            <span className="font-semibold">Year:</span> {car.year}
          </p>
          <p>
            <span className="font-semibold">Color:</span> {car.color}
          </p>
          <p>
            <span className="font-semibold">Rent Per Hour:</span> ₹{car.rentPerHour}
          </p>
          <p>
            <span className="font-semibold">Availability:</span>{" "}
            {car.availability ? "Available" : "Not Available"}
          </p>
        </div>
        <button
          onClick={handleBooking}
          className="w-full mt-6 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-500 focus:outline-none"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default CarDetail;
