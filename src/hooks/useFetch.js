import { useEffect, useState } from 'react';

const useFetch = (callback) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    callback()
      .then((userList) => setData(userList))
      .catch((e) => {
        console.error(e);
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  return [loading, data, error];
};

export default useFetch;
