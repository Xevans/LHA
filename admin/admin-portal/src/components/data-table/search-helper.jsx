export function filterByYear(any_year_selection, death_year, records) {

    // determine filter year; assume year exist
    let filtered_data = records.filter((record) => {
        if (any_year_selection || record.deathYear == death_year) {
            return record;
        }
    })

    // return the table data
    return filtered_data;
}