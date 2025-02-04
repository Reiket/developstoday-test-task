"use client";
import {useState} from "react";
import {FilterForm} from "@app/src/components/FilterForm";
import {useMakes} from "@app/src/hooks/useMakes";

export default function FilterPage() {
    const [selectedMake, setSelectedMake] = useState<string>("");
    const [selectedYear, setSelectedYear] = useState<string>("");
    const makes = useMakes();
    const makeOptions = makes.map((make) => ({
        value: make.MakeId.toString(),
        label: make.MakeName,
    }));

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => (2015 + i).toString());
    const yearOptions = years.map((year) => ({
        value: year,
        label: year,
    }));

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-dark-100 p-6">
            <h1 className="text-2xl font-bold mb-4">Select Vehicle Make and Model Year</h1>

            <FilterForm
                makes={makeOptions}
                years={yearOptions}
                selectedMake={selectedMake}
                selectedYear={selectedYear}
                onMakeChange={setSelectedMake}
                onYearChange={setSelectedYear}
            />
        </div>
    );
}
