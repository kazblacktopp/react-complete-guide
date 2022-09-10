import { useState, useCallback } from 'react';

export default function useAJAX() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyDataFn) => {
    const { url, options = null } = requestConfig;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        url,
        options
          ? {
              method: options.method,
              headers: options.headers,
              body: JSON.stringify(options.body),
            }
          : null
      );

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();

      applyDataFn(data);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Something went wrong!');
    }
    setIsLoading(false);
  }, []);
  return { isLoading, error, sendRequest };
}
