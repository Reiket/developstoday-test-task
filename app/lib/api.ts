import {Make} from "@app/app/types/types";

export const fetchMakes = async (): Promise<Make[]> => {
    try {
        const response = await fetch(
            "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"
        );
        const data = await response.json();
        return data.Results;
    } catch (error) {
        console.error("Error fetching vehicle makes:", error);
        return [];
    }
};

export async function fetchVehicleModels(makeId: string | null, year: string | null) {
    try {
        const res = await fetch(
            `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
        );
        const data = await res.json();

        if (data.Results) {
            return data.Results;
        } else {
            throw new Error("No vehicle models found.");
        }
    } catch (error) {
        console.warn(error);
        throw new Error("Error fetching vehicle models.");
    }
}
