// src/hooks/useMakes.ts
import {useEffect, useState} from 'react';
import {Make} from '@app/src/types/types';
import {fetchMakes} from '@app/src/lib/api';

export const fetchMakesData = async () => {
  return await fetchMakes();
};

export function useMakes() {
  const [makes, setMakes] = useState<Make[]>([]);

  useEffect(() => {
    fetchMakesData().then(setMakes);
  }, []);

  return makes;
}
