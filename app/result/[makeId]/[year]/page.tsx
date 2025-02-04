"use client";

import React from "react";
import { ErrorMessage } from "@app/src/ui-kits/ErrorMessage";
import { Loader } from "@app/src/ui-kits/Loader";
import { VehicleModels } from "@app/src/components/VehicleModels";
import {useVehicleModels} from "@app/src/hooks/useVehicleModels";
import {useParams} from "next/navigation";
export default function ResultPage() {
    const { makeId, year } = useParams();
    const { models, error, loading } = useVehicleModels(makeId, year);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <ErrorMessage error={error} />;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">
                List of Vehicle models
            </h1>
            <VehicleModels models={models} />
        </div>
    );
}
