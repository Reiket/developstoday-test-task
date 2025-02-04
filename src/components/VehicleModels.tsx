import React, {FC} from 'react';
import {ModelCard} from "@app/src/components/ModelCard";
import {VehicleModel} from "@app/app/types/types";

interface Props {
    models: VehicleModel[]
}

export const VehicleModels: FC<Props> = ({models}) => {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {models.map((model) => (
                <ModelCard key={model.Model_ID} modelName={model.Model_Name} makeName={model.Make_Name}/>
            ))}
        </ul>
    );
};
