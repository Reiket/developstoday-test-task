import type {FC} from "react";
import {Select} from "@app/src/ui-kits/Select";
import {ButtonLink} from "@app/src/ui-kits/ButtonLink";

interface SelectOptions {
    value: string;
    label: string
}

interface Props {
    makes: SelectOptions[];
    years: SelectOptions[];
    selectedMake: string;
    selectedYear: string;
    onMakeChange: (make: string) => void;
    onYearChange: (year: string) => void;
}

export const FilterForm: FC<Props> = ({
                                                                    makes,
                                                                    years,
                                                                    selectedMake,
                                                                    selectedYear,
                                                                    onMakeChange,
                                                                    onYearChange,
                                                                }) => {
    const isButtonDisabled = !selectedMake || !selectedYear;
    const linkHref = `/result/${selectedMake}/${selectedYear}`

    return (
        <form noValidate className="w-full max-w-md space-y-4">
            <Select
                label="Vehicle Make"
                options={makes}
                value={selectedMake}
                onChange={onMakeChange}
            />
            <Select
                label="Model Year"
                options={years}
                value={selectedYear}
                onChange={onYearChange}
            />
            <ButtonLink text="Next" disabled={isButtonDisabled} href={linkHref} />
        </form>
    );
};
