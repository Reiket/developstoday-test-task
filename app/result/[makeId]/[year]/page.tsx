'use client';

import React, {Suspense} from 'react';
import {ErrorMessage} from '@app/src/ui-kits/ErrorMessage';
import {Loader} from '@app/src/ui-kits/Loader';
import {useVehicleModels} from '@app/src/hooks/useVehicleModels';
import {useParams} from 'next/navigation';

const VehicleModels = React.lazy(() => import('@app/src/components/VehicleModels'));

export default function ResultPage() {
  const {makeId, year} = useParams();
  const {models, error, loading} = useVehicleModels(makeId!.toString(), year!.toString());

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <ErrorMessage error={error} />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">List of Vehicle models</h1>
      <Suspense fallback={<Loader />}>
        <VehicleModels models={models} />
      </Suspense>
    </div>
  );
}
