import { useEffect, useState } from "react";
import { getCollection } from "../../../utils/fetch.util";
import { sortByYearDescending } from "./helperObitTable.component";
import { filterObits } from "./helperObitSearchbar.component";
import TableButton from "../../buttons/table_button/table_button.component";

const ObituaryTable = () => {

    {/* Address dependencies, add search, add utility for special searches. */}

    // table data
    const [tableData, setTableData] = useState([]);
    const [filteredTableData, setFileteredTableData] = useState([]);
    const [dataCount, setDataCount] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(true);

    // table settings
    const [brevity, setBrevity] = useState(50);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(min+brevity);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredDataCount, setFilteredDataCount] = useState(0);

    // Def Search Object
    const defaultSearchObject = {
        first_name: "",
        middle_name: "",
        last_name: "",
        search_year: 0
    }

    // search bar settings
    const [searchFields, setSearchFields] = useState(defaultSearchObject);
    const [anyYearSelection, setAnyYearSelection] = useState(false);
    const {first_name, middle_name, last_name, search_year} = searchFields;



    async function getColl(collection_name) {
        try {

            const response = await getCollection(collection_name);
            const {data, count} = response;
            setMin(0);

            // empty data
            if (data.length < 1) {
                throw new Error("No records found");
            }


            if (count <= 50) {
                setBrevity(count);
            }
            else {
                setBrevity(50);
            }

            // sort data by year descending (Default arrangement of table data)
            const sorted_data = sortByYearDescending(data);

            setTableData(sorted_data);
            setDataCount(count);
    
            
        } catch (error) {
            setDataCount(-1);
            console.log.error;
        }
    }

    // on refresh run the fetch code block
    useEffect(() => {
        // switch case that matches the string enpoint with the matching context
        //let route = "";
        if (!isFiltered) {
            getColl("obituary");
        }
        else {
            setSearchFields(defaultSearchObject);
            getColl("obituary");
            setIsFiltered(false);
        }
        setIsRefreshing(false);
    }, [isRefreshing]);


    // update max only when dependencies change
    useEffect(() => {
        setMax(min+brevity);
    }, [brevity, min]);


    //
    useEffect(() => {
        if (first_name.length > 0 || middle_name.length > 0 || last_name.length > 0 || search_year > 2000) { // criteria to run search? "isSearching?"

            const timer = setTimeout(() => {

                const filtered_data = filterObits(anyYearSelection, search_year, first_name, middle_name, last_name, tableData);
                setFilteredDataCount(filtered_data.length);
                setMin(0);
                
                if (filteredDataCount < 50) {
                    setBrevity(filtered_data.length);
                }

                if (filtered_data.length > 0) {
                    setFileteredTableData(filtered_data);
                    setIsFiltered(true);
                }
                console.log(filtered_data);
            }, 500);

            return () => clearTimeout(timer);

        }

    }, [searchFields]);


    // move to next page in table
    // checks if how much data there is left to show and shows the next chunk or remainder
    function checkAndIncreaseMin() {
        if (!isFiltered) {
            if (max + brevity > dataCount) {
                // set max to the justifiable difference
                setMin(dataCount - brevity);
            }
            else {
                setMin(min + brevity);
            }
        }
        else {
            if (max + brevity > filteredDataCount) {
                // set max to the justifiable difference
                setMin(filteredDataCount - brevity);
            }
            else {
                setMin(min + brevity);
            }
        }
    }
    

    // move to previous page in table
    // checks if how much data there is left to show and shows the previous chunk or first chunk
    function checkAndDecreaseMin() {
        if (min === 0) {
            // set max to the justifiable difference
            return;
        }
        else if (min - brevity < 0) {
            setMin(0);
        }
        else {
            setMin(min - brevity);
        }
    }


    // change the amount of visible rows in table
    // accepts an ammount to show then validates how much can be shown given current table attributes
    function CheckAndUpdateBrevity(amount) {
        if (!isFiltered) {
            if (amount > brevity && max == dataCount) { // prevent overshoot if displaying last element in table
                return;
            }
            if ((min + amount) > dataCount) { // prevent overshoot if at end of list
                // brevity will exceed max data count
                // need to cap/set max to the upper bound (dataCount)
                setBrevity(amount - (amount - dataCount));
        
            }
            else {
                // brevity will not exceed max data count
                setBrevity(amount);
        
            }
        }
        else {
            if (amount > brevity && max == filteredDataCount) { // prevent overshoot if displaying last element in table
                return;
            }
            if ((min + amount) > filteredDataCount) { // prevent overshoot if at end of list
                // brevity will exceed max data count
                // need to cap/set max to the upper bound (dataCount)
                setBrevity(amount - (amount - filteredDataCount));
        
            }
            else {
                // brevity will not exceed max data count
                setBrevity(amount);
        
            }
        }
    }


    function handleChange(event) {
        const { name, value } = event.target;
        setSearchFields({...searchFields, [name]: value});

    }

    function handleAnyYearChange() {
        if (anyYearSelection) {
            setAnyYearSelection(false);
        }
        else {
            setAnyYearSelection(true);
        }
    }

    

    return (
        <>
            <div className="mt-10 min-h-screen">
            
                { /* Render Table only if data is present */
                    tableData.length > 0 &&  
                    
                        <>              
                            <div className="mx-10 dark:text-white">
                                <div className='my-4 text-xl font-semibold'>
                                    Name Search
                                </div>                                 
                                <div className="mx-auto">
                                    <div className="flex flex-col md:flex-row ">

                                        <div className="mx-3 w-full max-w-lg min-w-[200px]">
                                            <div className="relative">
                                                <label className="block mb-2 text-sm text-slate-600 dark:text-white">
                                                    First Name
                                                </label>
                                                <input
                                                className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type='first_name' name='first_name' value={first_name} onChange={handleChange}
                                                />
                                            </div>
                                        </div>


                                        <div className="mx-3 w-full max-w-lg min-w-[200px]">
                                            <div className="relative">
                                                <label className="block mb-2 text-sm text-slate-600 dark:text-white">
                                                    Middle Name
                                                </label>
                                                <input
                                                className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type='middle_name' name='middle_name' value={middle_name} onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className=" mx-3 w-full max-w-lg min-w-[200px]">
                                            <div className="relative">
                                                <label className="block mb-2 text-sm text-slate-600 dark:text-white">
                                                    Last Name
                                                </label>
                                                <input
                                                className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                                type='last_name' name='last_name' value={last_name} onChange={handleChange}
                                                />
                                            </div>
                                        </div>

                                        <div className="mx-3 relative pr-3">
                                            <label className="block mb-2 text-sm text-slate-600 dark:text-white">
                                                Death Year
                                            </label>
                                            <input
                                            className={` ${anyYearSelection ? 'cursor-not-allowed':'cursor-text'} peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                                            maxLength={4} minLength={4} type='number' min={0} name='search_year' onChange={handleChange} value={search_year}
                                            disabled={anyYearSelection}
                                            />
                                        </div>

                                        <div className="mx-3 relative pr-3 mt-3">
                                            
                                            <div className="flex items-center ">
                                                <input type="checkbox" value={anyYearSelection} onChange={handleAnyYearChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 "/>
                                                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-white">
                                                    Search All Years
                                                </label>
                                            </div>

                                        </div>

                                    </div>
                                </div>                               
                            </div>

                            <div className="relative overflow-x-auto overflow-y-auto shadow-md rounded-2xl mt-5">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white ">
                                        <div className="flex flex-row">
                                            <div className="flex-1">
                                                Table View
                                                <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                                Browse and review obituary records from this table.<br/>
                                                Use the fields above to narrow down your search.
                                                </p>
                                            </div>
                                            <div 
                                            onClick={() => setIsRefreshing(true)}
                                            className="cursor-pointer p-2 rounded-2xl  text-blue-700 transition duration-200 ease-in-out hover:bg-blue-400 hover:text-white">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <div className="flex flex-col sm:flex-row ">
                                                <h2 className="text-lg flex-1">Row Count: {brevity}</h2>
                                                <h2 className="text-lg flex-1">Showing: {`${min+1} - ${max}`}</h2>
                                                <h2 className="text-lg">Total Records: {`${isFiltered ? filteredDataCount : dataCount}`}</h2>
                                            </div>
    
                                            <div className="flex flex-row">
                                                <div className="flex flex-row flex-1 text-sm">
                                                    <div className="p-2 border rounded-xl cursor-pointer" onClick={() => CheckAndUpdateBrevity(50)}>
                                                        50
                                                    </div>
                                                    <div className="ml-2 p-2 border rounded-xl cursor-pointer" onClick={() => CheckAndUpdateBrevity(100)}>
                                                        100
                                                    </div>
                                                    <div className="ml-2 p-2 border rounded-xl cursor-pointer" onClick={() => CheckAndUpdateBrevity(200)}>
                                                        200
                                                    </div>
                                                </div>                                            
                                                
                                            </div>
                                        </div>
                                    </caption>
                                    <div className="">
                                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                            <tr>
                                                <th scope="col" className="px-6 py-3">
                                                    First
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Middle
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Last
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Date of Death
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Publisher
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Page #
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Print Date
                                                </th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody>
                                            
                                            <>
                                                { !isFiltered &&
                                                    tableData.slice(min, max).map((record, key) => {
                                                    
                                                    return(
                                                        
                                                        <tr key={key} className="bg-white border-b  border-gray-200">
                                                                
                                                            <td className="px-6 py-4">
                                                                {`${record.firstName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.middleName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.lastName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.deathYear == 209999 ? 'unknown' : `${record.deathMonth}/${record.deathDay}/${record.deathYear}` }`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.publicationName.length < 1 ? 'unknown' : `${record.publicationName}`}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.pageNumber.length < 1 ? 'unknown' : `${record.pageNumber}`}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.printYear == 209999 ? 'unknown' : `${record.printMonth}/${record.printDay}/${record.printYear}`}`}
                                                            </td>
                                                        </tr>
                                                        
                                                    )
                                                })}

                                                { isFiltered &&
                                                    filteredTableData.slice(min, max).map((record, key) => {
                                                    
                                                    return(
                                                        
                                                        <tr key={key} className="bg-white border-b  border-gray-200">
                                                                
                                                            <td className="px-6 py-4">
                                                                {`${record.firstName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.middleName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.lastName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.deathYear == 209999 ? 'unknown' : `${record.deathMonth}/${record.deathDay}/${record.deathYear}` }`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.publicationName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.pageNumber}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.printYear == 209999 ? 'unknown' : `${record.printMonth}/${record.printDay}/${record.printYear}`}`}
                                                            </td>
                                                        </tr>
                                                        
                                                    )
                                                })}
                                            </>
                                        </tbody>
                                    </div>
                                </table>
                                
                            </div>
                            
                            
                            <div className="flex flex-row ml-2 mr-2 pb-2">
                                        
                                    <div className="flex-1">
                                        <div onClick={() => checkAndDecreaseMin()}>
                                            <TableButton  destination="Previous Page" />
                                        </div>
                                        
                                    </div>
    
                                    <div className="flex">
                                        <div onClick={() => checkAndIncreaseMin()}>
                                            <TableButton destination="Next Page" />
                                        </div>
                                    </div>
    
                            </div>
                        </>
                    /* Render Table only if data is present */}
    
                    {dataCount === -1 &&
                        
                        <div>
                            <h2 className="text-2xl font-bold text-center p-4 bg-red-400 text-white rounded-xl shadow-xl">Cannot connect to database!</h2>
                        </div>
                    }
    
                    {dataCount === 0 &&
                        
                        <div>
                            <h2 className="text-2xl font-bold text-center p-4 bg-red-400 text-white rounded-xl shadow-xl">No Records Found!</h2>
                        </div>
                    }
            </div>
        </>
    )
}

export default ObituaryTable;