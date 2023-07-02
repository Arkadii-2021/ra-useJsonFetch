import { useState, useEffect } from "react";


export default function useJsonFetch(url, opts) {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
        setLoading("Loading...");
        const response = await fetch(url);
        const data = await response.json();
		data.status === 'ok' ? setData(data) : setError(data);
		setData(data);
		setLoading(false);
    };
    fetchData();
  }, [url]);

  return [{ data, loading, error }];
}
