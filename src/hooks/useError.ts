import { useState } from 'react';

export const useError = () => {
  const [error, setError] = useState<string | null>(null);

  return {
    error,
    setError,
  };
};
