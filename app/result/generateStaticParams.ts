import {fetchMakes} from "@app/app/lib/api";

export async function generateStaticParams() {
    const makes = await fetchMakes();

    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 2014 }, (_, i) => (2015 + i).toString());

    const paths = makes.flatMap((make) =>
        years.map((year) => ({
            params: { makeId: make.MakeId.toString(), year },
        }))
    );
    return { paths };
}
