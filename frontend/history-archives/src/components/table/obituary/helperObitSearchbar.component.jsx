
// on change, this will refilter but not alter the original data
export function filterObits(any_year_selection, death_year, first_name, middle_name, last_name, obit_records) {


    // determine filter year; assume year exist
    let filtered_data = obit_records.filter((record) => {
        if (any_year_selection || record.deathYear == death_year) {
            return record;
        }
    })

    
    
    // determine filter first name
    if (first_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.firstName.toLocaleLowerCase().includes(first_name.toLocaleLowerCase())) {
                return record;
            }
        })
        
    }

    // determine filter middle name
    if (middle_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.middleName.toLocaleLowerCase().includes(middle_name.toLocaleLowerCase())) {
                return record;
            }
        })
        
    }

    // determine filter last name
    if (last_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.lastName.toLocaleLowerCase().includes(last_name.toLocaleLowerCase())) {
                return record;
            }
        })
        
    }

    // return the table data
    return filtered_data;
}