

export function sortByYearDescending(obituary_records) {
    const sorted_data = [...obituary_records].sort((a, b) => b.printYear - a.printYear);
    return sorted_data;
}

export function renderYearsToSelect() {

    for (let index = 2010; index < 2025; index++) {
        return (
            <li>
                <button type="button" className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{index}</button>
            </li>
        );
    }
}