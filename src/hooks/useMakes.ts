// src/hooks/useMakes.ts
import {useEffect, useState} from 'react';
import {Make} from '@app/app/types/types';
import {fetchMakes} from '@app/app/lib/api';

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
