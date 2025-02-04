import {useEffect, useState} from 'react';
import {fetchVehicleModels} from '@app/app/lib/api';
import {VehicleModel} from '@app/app/types/types';

export function useVehicleModels(makeId: string, year: string) {
  const [models, setModels] = useState<VehicleModel[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!makeId || !year) return;

    async function fetchData() {
      try {
        const data = await fetchVehicleModels(makeId, year);
        setModels(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [makeId, year]);

  return {models, error, loading};
}
