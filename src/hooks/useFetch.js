import { useState, useEffect } from "react";

export default function useFetch(request) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await request();
        setData(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    return () => {
      setData(null);
      setLoading(false);
      setError(null);
    };
  }, [request]);

  return { data, loading, error };
}
