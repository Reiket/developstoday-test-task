import React, {FC} from 'react';

interface Props {
    modelName: string
    makeName: string
}

export const ModelCard: FC<Props> = ({modelName, makeName}) => {
    return (
        <li className="border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">{modelName}</h3>
            <p className="text-gray-600">{makeName}</p>
        </li>
    );
};
