import { useEffect, useState } from "react";
import { Make } from "@app/app/types/types";
import { fetchMakes } from "@app/app/lib/api";

export function useMakes() {
    const [makes, setMakes] = useState<Make[]>([]);

    useEffect(() => {
        fetchMakes().then(setMakes).catch((error) => console.error("Error fetching makes:", error));
    }, []);

    return makes;
}
