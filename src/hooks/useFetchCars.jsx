import { useState, useEffect } from 'react';
import axios from 'axios';
import api from '../axios';

const useFetchCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('http://localhost:3000/api/cars');
        setCars(response.data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch cars');
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return { cars, loading, error };
};

export default useFetchCars;
