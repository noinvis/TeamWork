import { useEffect, useState } from "react";
import { api } from "../api";

export const useFetch = (endpoint, params) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    api
      .get(endpoint, {params})
      .then((res) => setData(res.data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, [endpoint, JSON.stringify(params)]);

  return {data, error, loading}
};

