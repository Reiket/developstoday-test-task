import {Make} from "@app/src/types/types";

export const fetchMakes = async (): Promise<Make[]> => {
    try {
        const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/GetMakesForVehicleType/car?format=json`
        );
        const data = await response.json();
        return data.Results;
    } catch (error) {
        console.error("Error fetching vehicle makes:", error);
        return [];
    }
};

export async function fetchVehicleModels(makeId: string, year: string) {
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_URL}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
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
