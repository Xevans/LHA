
// Filter table data while treating orginal data as immutable
function filterObitsPartialString(any_year_selection, death_year, first_name, middle_name, last_name, obit_records) {

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




export function filterObitsExactString(any_year_selection, death_year, first_name, middle_name, last_name, obit_records) {

    // determine filter year; assume year exist
    let filtered_data = obit_records.filter((record) => {
        if (any_year_selection || record.deathYear == death_year) {
            return record;
        }
    })

    
    
    // determine filter first name
    if (first_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.firstName.toLocaleLowerCase() == first_name.toLocaleLowerCase()) {
                return record;
            }
        })
        
    }

    // determine filter middle name
    if (middle_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.middleName.toLocaleLowerCase() == middle_name.toLocaleLowerCase()) {
                return record;
            }
        })
        
    }

    // determine filter last name
    if (last_name.length > 0) {
        filtered_data = filtered_data.filter((record) => {
            if (record.lastName.toLocaleLowerCase() == last_name.toLocaleLowerCase()) {
                return record;
            }
        })
        
    }

    // return the table data
    return filtered_data;
}



// wrapper: determine which filter routine based on first option.
export function filterObits(exact_string_selection, any_year_selection, death_year, first_name, middle_name, last_name, obit_records) {

    if (exact_string_selection) {
        const filtered_data = filterObitsExactString(any_year_selection, death_year, first_name, middle_name, last_name, obit_records);
        return filtered_data;
    }
    else {
        const filtered_data = filterObitsPartialString(any_year_selection, death_year, first_name, middle_name, last_name, obit_records);
        return filtered_data;
    }
}