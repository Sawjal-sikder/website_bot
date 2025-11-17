import { useEffect, useState } from 'react';
import axios from 'axios';
import api from '../services/auth';

const useFetchWithoutAuth = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
    if (!endpoint) return;
    
    setLoading(true);
    try {
      const response = await api.get(`${endpoint}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setData(response.data);
      setError(null);
    } catch (err) {
      console.error('Error fetching data:', err);
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const refetch = () => {
    getData();
  };

  useEffect(() => {
    getData();
  }, [endpoint]);

  return { data, loading, error, refetch };
};

export default useFetchWithoutAuth;
    