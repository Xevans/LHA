import { useContext, useEffect, useState } from "react";
import { deleteDoc, getCollection } from "../../utils/admin-backend.util";
import { determineCollection, determineTableHeader } from "./database-table-helper";
import { filterByYear } from "./search-helper";
import { ToastContext } from "../../contexts/toast.context";
import { Status } from "../../enums/toastType.enum";


const DBTable = (props) => {

    // implement a usefetch hook. Pull data from the route in the current prop
    // map through the keys to define the headers of the table
    // map through the values of each record to populate each subsequent row.

    const { current_route } = props;

    // table data
    const [tableData, setTableData] = useState([]);
    const [dataCount, setDataCount] = useState(0);
    const [isRefreshing, setIsRefreshing] = useState(true);

    const [filteredTableData, setFilteredTableData] = useState([]);


    // table settings
    const [brevity, setBrevity] = useState(50);
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(min+brevity);
    const [isFiltered, setIsFiltered] = useState(false);
    const [filteredDataCount, setFilteredDataCount] = useState(0);
    

    // search settings
    const [searchYear, setSearchYear] = useState(2000);
    const [anyYearSelection, setAnyYearSelection] = useState(true);


    const { makeAToast } = useContext(ToastContext);
    

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

            setTableData(data);
            setDataCount(count);
            //console.log(response);
            makeAToast("Table Data Loaded", Status.SUCCESS);
            
        } catch (error) {
            setDataCount(-1);
            makeAToast(`${error}`, Status.ERROR)
            console.log.error;
        }
    }


    // ensure DB returns an OK on the backend
    //send req
    //then filter out record from table memory
    //handle edgecases for max and possibly brevity
    async function handleRecordDelete(id) {

        // determine collection
        const collection_name = determineCollection(current_route);

        // try to make async req
        try {
            const response = await deleteDoc(collection_name, id);
            
            // if req does not fail, filter table, toast success msg

            if (response == -1) {
                throw new Error("Delete Operation Failed.");
            }

            // reset min and brevity
            // if status not 200, toast fail msg
            setMin(0)
            setBrevity(50)
            makeAToast("Record Deleted!");
            setIsRefreshing(true); // kick off fetch

        } catch (error) {
            console.error(error);
            makeAToast(`${error}`, Status.ERROR);
        }
    }
    

    useEffect(() => {
        // switch case that matches the string enpoint with the matching context
        //let route = "";
        
        switch (current_route) {
            case "news":
                getColl("gp_news");
                break;
            
            case "magazine":
                getColl("gp_magazine");
                break;

            case "heritage":
                getColl("gp_heritage");
                break;
            
            case "civic":
                getColl("gp_civic");
                break;

            case "review":
                getColl("gp_review");
                break;
            
            case "obituary":
                getColl("obituary");
                break;
                    
            default:
                break;
        }
        

        setIsRefreshing(false);
    }, [current_route, isRefreshing]);


    useEffect(() => {
        setMax(min+brevity);
    }, [brevity, min]);


    // copy a record id to the user's clipboard
    // accepts a string
    async function handleCopyToClipboard(id) {
        try {
            await navigator.clipboard.writeText(id);
            makeAToast("Copied To Clipboard", Status.SUCCESS);
        } catch (error) {
            console.log(error)
        }
    }


    // move to next page in table
    // checks if how much data there is left to show and shows the next chunk or remainder
    function checkAndIncreaseMin() {
        if (max + brevity > dataCount) {
            // set max to the justifiable difference
            setMin(dataCount - brevity);
        }
        else {
            setMin(min + brevity);
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


    function handleChange(event) {
        const {value} = event.target;
        setSearchYear(value);
    }


    // debouncing table rerender when user updates search fields.
    //Fire off search
    useEffect(() => {
        if (searchYear > 1900) { // criteria to run search? "isSearching?"

            const timer = setTimeout(() => {

                const filtered_data = filterByYear(anyYearSelection, searchYear, tableData);
                setFilteredDataCount(filtered_data.length);
                setMin(0);
                
                if (filtered_data.length < 50) {
                    setBrevity(filtered_data.length);
                }
                else {
                    setBrevity(50);
                }

                if (filtered_data.length > 0) {
                    setFileteredTableData(filtered_data);
                    setIsFiltered(true);
                }
                
            }, 500);

            return () => clearTimeout(timer);

        }

    }, [searchYear, anyYearSelection]);


    function handleAnyYearChange() {
        if (anyYearSelection) {
            setAnyYearSelection(false);
        }
        else {
            setAnyYearSelection(true);
        }
    }


    // Render
    return (
        <>
            <div className=" mt-10">

            { /* Render Table only if data is present */
                tableData.length > 0 &&  
                
                    <>              
                        <div className="relative overflow-x-auto overflow-y-auto shadow-md sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                                <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white ">
                                    <div className="flex flex-row">
                                        <div className="flex-1">
                                            Database View
                                            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
                                            Browse and modify records in the database for the current route.<br/>
                                            To update an entry, copy its ID and enter it in the 'Fetch' text box.
                                            </p>
                                        </div>
                                        <div 
                                        onClick={() => setIsRefreshing(true)}
                                        className="cursor-pointer mt-8 p-2 rounded-2xl text-blue-700 transition duration-200 ease-in-out hover:bg-blue-400 hover:text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <div className="flex flex-row">
                                            <h2 className="text-lg flex-1">Row Count: {brevity}</h2>
                                            <h2 className="text-lg flex-1">Showing: {`${min+1} - ${max}`}</h2>
                                            <h2 className="text-lg flex-1">Total Records: {dataCount}</h2>

                                            <div>
                                                <div className="mx-3 relative pr-3">
                                                    <label className="block mb-2 text-sm text-slate-600 dark:text-white">
                                                        Death Year
                                                    </label>
                                                    <input
                                                    className={`${anyYearSelection ? 'cursor-not-allowed':'cursor-text'} peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                                                    maxLength={4} minLength={4} type='number' min={0} name='searchYear' onChange={handleChange} value={searchYear}
                                                    disabled={anyYearSelection}
                                                    />
                                                </div>
                                            </div>

                                            <div className="mx-3 relative pr-3 mt-3">
                                                
                                                <div className="mt-5 flex items-center ">
                                                    <input type="checkbox" defaultChecked value={anyYearSelection} onChange={handleAnyYearChange} className=" w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 "/>
                                                    <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900">
                                                        Search All Years
                                                    </label>
                                                </div>

                                            </div>

                                        </div>

                                        <div className="flex flex-row">
                                            <div className="flex flex-row flex-1">
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
                                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                                    <tr>
                                        {
                                            determineTableHeader(current_route)
                                        }
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {
                                        !isFiltered &&
                                        <>
                                            {current_route !== "obituary" &&
                                            <>

                                                {tableData.slice(min, max).map((record, key) => {
                                                    
                                                    return(
                                                        
                                                        <tr key={key} className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                {min+key+1}
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                                                {record._id}
                                                            </th>

                                                            <td className="px-6 py-4">
                                                                {record.title}
                                                            </td>
                                                        
                                                            <td className="px-6 py-4">
                                                                <a href={record.fileURL} target="_blank" className=" text-blue-700 hover:text-blue-500">{record.fileURL}</a>
                                                            </td>
                                        
                                                            <td className="px-6 py-4">
                                                                {record.publishMonth}/{record.publishDay && `${record.publishDay}/`}{record.publishYear && record.publishYear}
                                                            </td>

                                                            {   record.publishDecade &&                                                        
                                                                <td className="px-6 py-4">
                                                                    {`${record.publishDecade}s`}
                                                                </td>
                                                            }

                                                            <td className="px-6 py-4 text-right">
                                                                <div className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                                                                onClick={() => handleCopyToClipboard(record._id)}>Copy ID</div>
                                                            </td>

                                                            <td className="px-6 py-4 text-right">
                                                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                                                                onClick={() => handleRecordDelete(record._id)}>
                                                                Delete
                                                                </a>
                                                            </td>

                    
                                                        </tr>
                                                        
                                                    )
                                                })}
                                            </>
                                        }

                                        { current_route === "obituary" &&

                                            <>
                                                {tableData.slice(min, max).map((record, key) => {
                                                    
                                                    return(
                                                        
                                                        <tr key={key} className="bg-white border-b  border-gray-200">
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                {min+key+1}
                                                            </th>
                                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                                                {record._id}
                                                            </th>
                                                                
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
                                                                {`${record.deathMonth}/${record.deathDay}/${record.deathYear}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.publicationName}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.pageNumber}`}
                                                            </td>

                                                            <td className="px-6 py-4">
                                                                {`${record.printMonth}/${record.printDay}/${record.printYear}`}
                                                            </td>
                                                        

                                                            <td className="px-6 py-4 text-right">
                                                                <div className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                                onClick={() => handleCopyToClipboard(record._id)}>
                                                                Copy ID
                                                                </div>
                                                            </td>

                                                            <td className="px-6 py-4 text-right">
                                                                <div className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                                                                onClick={() => handleRecordDelete(record._id)}>
                                                                Delete
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        
                                                    )
                                                })}
                                            </>

                                        }
                                        </>
                                    }

                                    {
                                        isFiltered &&

                                        <>
                                            {current_route !== "obituary" &&
                                                <>

                                                    {filteredTableData.slice(min, max).map((record, key) => {
                                                        
                                                        return(
                                                            
                                                            <tr key={key} className="bg-white border-b  border-gray-200">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                    {min+key+1}
                                                                </th>
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                                                    {record._id}
                                                                </th>

                                                                <td className="px-6 py-4">
                                                                    {record.title}
                                                                </td>
                                                            
                                                                <td className="px-6 py-4">
                                                                    {record.fileURL}
                                                                </td>
                                            
                                                                <td className="px-6 py-4">
                                                                    {record.publishMonth}/{record.publishDay && `${record.publishDay}/`}{record.publishYear && record.publishYear}
                                                                </td>

                                                                {   record.publishDecade &&                                                        
                                                                    <td className="px-6 py-4">
                                                                        {`${record.publishDecade}s`}
                                                                    </td>
                                                                }

                                                                <td className="px-6 py-4 text-right">
                                                                    <div className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline"
                                                                    onClick={() => handleCopyToClipboard(record._id)}>Copy ID</div>
                                                                </td>

                                                                <td className="px-6 py-4 text-right">
                                                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                                                                    onClick={() => handleRecordDelete(record._id)}>
                                                                    Delete
                                                                    </a>
                                                                </td>

                        
                                                            </tr>
                                                            
                                                        )
                                                    })}
                                                </>
                                            }

                                            { current_route === "obituary" &&

                                                <>
                                                    {filteredTableData.slice(min, max).map((record, key) => {
                                                        
                                                        return(
                                                            
                                                            <tr key={key} className="bg-white border-b  border-gray-200">
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                                                    {min+key+1}
                                                                </th>
                                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900">
                                                                    {record._id}
                                                                </th>
                                                                    
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
                                                                    {`${record.deathMonth}/${record.deathDay}/${record.deathYear}`}
                                                                </td>

                                                                <td className="px-6 py-4">
                                                                    {`${record.publicationName}`}
                                                                </td>

                                                                <td className="px-6 py-4">
                                                                    {`${record.pageNumber}`}
                                                                </td>

                                                                <td className="px-6 py-4">
                                                                    {`${record.printMonth}/${record.printDay}/${record.printYear}`}
                                                                </td>
                                                            

                                                                <td className="px-6 py-4 text-right">
                                                                    <div className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                                                    onClick={() => handleCopyToClipboard(record._id)}>
                                                                    Copy ID
                                                                    </div>
                                                                </td>

                                                                <td className="px-6 py-4 text-right">
                                                                    <div className="cursor-pointer font-medium text-blue-600 dark:text-blue-500 hover:underline" 
                                                                    onClick={() => handleRecordDelete(record._id)}>
                                                                    Delete
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                            
                                                        )
                                                    })}
                                                </>

                                            }
                                        </>
                                    }
                                        
                                        
                                    
                                    
                                </tbody>
                            </table>
                            
                        </div>
                        
                        
                        <div className="flex flex-row ml-2 mr-2 mb-2">
                                    
                                <div className="flex-1">
                                    <button type="button" 
                                    className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    onClick={() => checkAndDecreaseMin()}
                                    >
                                        Previous Page
                                    </button>
                                </div>

                                <div className="flex">
                                    <button type="button" 
                                    className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    onClick={() => checkAndIncreaseMin()}
                                    >
                                        Next Page
                                    </button>
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

export default DBTable;