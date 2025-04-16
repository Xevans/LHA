import { useContext, useState } from 'react';
import { createDoc, getDocByID } from '../../../utils/admin-backend.util';
import { Status } from '../../../enums/toastType.enum';
import { ToastContext } from '../../../contexts/toast.context';


const Obituary = () => {

     //default states for sign-in form members
    const defaultFormFields = { // pre-defineing state data because we know exactly what is going to go in there and know that should be the case every time
        _id: '',
        last_name: '',
        first_name: '',
        middle_name: '',
        death_month: 0,
        death_day: 0,
        death_year: 0,
        printed_month: 0,
        printed_day: 0,
        printed_year: 0,
        publisher_name: "",
        page_number: 1
        
    }


    /* state tracking */
    const [formFields, setFormFields] = useState(defaultFormFields); //setting default state// returns the default fields and setformfield logic to the array elements respectively
    
    const [recordID, setRecordID] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    
    const { 
        last_name,
        first_name,
        middle_name,
        death_month,
        death_day,
        death_year,
        printed_month,
        printed_day,
        printed_year,
        publisher_name,
        page_number
    } = formFields // destructure values from json obj for short handing


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    const {
        makeAToast
    } = useContext(ToastContext);


    // update respective state values as user types
    const handleChange = (event) => {
        // update json data field with respective form field as the user types
        const { name, value } = event.target; // destructure/extract needed data from json obj
        setFormFields({...formFields, [name]: value});
    };


    // user submits their email and password for sign in
    const handleSubmit = async (event) => {
        // do upload
        event.preventDefault();
        let data = [formFields];

        
        try {
            const collection_name = "obituary";
            const response = await createDoc(collection_name, data);

            if (response != 201) {
                throw new Error("Record could not be created.");
            } 
            
            if (isUpdating) {
                makeAToast("Record Updated!", Status.SUCCESS);
            }
            else {
                makeAToast("Record Published!", Status.SUCCESS);
            }
      
          } catch (error) {
            console.error('Error:', error);
            makeAToast(`Submission Failed: ${error}`, Status.ERROR);
          }

        resetFormFields(); // reset states of each field value
    }



    function handleIDChange(event) {
        const {value} = event.target
        setRecordID(value);
    }

    async function handleFetchRecord() {
        const collection_name = "obituary";
        try {
            const response = await getDocByID(collection_name, recordID);

            if (!response){
                throw new Error("No Matching Record");
            }
            
            const data = {
                _id: recordID,
                last_name: response.lastName,
                first_name: response.firstName,
                middle_name: response.middleName,
                death_month: response.deathMonth,
                death_day: response.deathDay,
                death_year: response.deathYear,
                printed_month: response.printMonth,
                printed_day: response.printDay,
                printed_year: response.printYear,
                publisher_name: response.publicationName,
                page_number: response.pageNumber
            }

            setFormFields(data);
            setIsUpdating(true);
            makeAToast("Fetch Successful", Status.SUCCESS);
            
            
        } catch (error) {
            console.log(error);
            makeAToast(`${error}`, Status.ERROR);
        }
    }

    function handleClearFetch() {
        setRecordID("");
        resetFormFields();
        setIsUpdating(false);
        makeAToast("Edit Operation Canceled", Status.CANCELLED);
    }


    



    return (
        <div>
            <div className='mt-8'>
                <h2 className='text-lg font-semibold'>Route: Obituary</h2>
            </div>

            <div className='mt-4 '>
                Fetch a record to update its fields or skip this step and create a new record.
            </div>

            {/* Fetch form */}
            <div className='flex flex-row'>

                <div className='mr-2'>
                    <button type="button"
                    onClick={async () => handleFetchRecord()} 
                    className="mt-4 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                        Fetch
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                            <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                <div className='mr-2'>
                    <div className="mt-4 w-full max-w-xl min-w-[200px]">
                        <div className="relative">
                            <label className="block mb-2 text-sm text-slate-600"></label>
                            <input
                            disabled={isUpdating}
                            className={` ${isUpdating ? 'cursor-not-allowed':'cursor-text'} cursor-not-allowed peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow`}
                            type='recordID' name='recordID' required={true} onChange={handleIDChange} value={recordID}
                            />
                            <div className='flex flex-row'>
                                <div className='flex-1 text-sm text-'>Enter the ID of the record to fetch for editing.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className={`mt-8 text-2xl cursor-pointer ${isUpdating ? '' : 'hidden'}`} onClick={() => handleClearFetch()}>
                        <span className='px-3 pb-2 rounded-2xl border-2 border-slate-800 transition ease-in delay-10 hover:-translate-y-1 hover:scale-110 hover:text-red-500 hover:bg-slate-800 duration-300 shadow-2xl'>x</span>
                    </div>
                </div>
            </div>
            
            <form onSubmit={handleSubmit}>

            
                <div className='mt-8 font-semibold'>
                    Person's Full Name
                </div>

                <div className="mt-4 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                            Last Name
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='last_name' name='last_name' required={true} onChange={handleChange} value={last_name}
                        />
                        <div className='flex flex-row'>
                        </div>
                    </div>
                </div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                            First Name
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='first_name' name='first_name' required={true} onChange={handleChange} value={first_name}
                        />
                    </div>
                </div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                            Middle Name
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='middle_name' name='middle_name' required={true} onChange={handleChange} value={middle_name}
                        />
                    </div>
                </div>

                <div className='mt-8 font-semibold'>
                    Date of Death
                </div>

                <div className="mt-2 w-full max-w-xl min-w-[200px] flex flex-row">

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Month
                        </label>
                        <input
                        className="peer w-12 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='death_month' name='death_month' required={true} onChange={handleChange} value={death_month}
                        />
                        
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Day
                        </label>
                        <input
                        className="peer w-12 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='death_day' name='death_day' required={true} onChange={handleChange} value={death_day}
                        />
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Year
                        </label>
                        <input
                        className="peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} type='death_year' name='death_year' required={true} onChange={handleChange} value={death_year}
                        />
                    </div>

                </div>
                <div className='text-sm'>No leading zeroes. Ex: if January, enter 1.</div>

                
                <div className='mt-8 font-semibold'>
                    Print Date of Obituary
                </div>

                <div className="mt-2 w-full max-w-xl min-w-[200px] flex flex-row">

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Month
                        </label>
                        <input
                        className="peer w-12 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='printed_month' name='printed_month' required={true} onChange={handleChange} value={printed_month}
                        />
                        
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Day
                        </label>
                        <input
                        className="peer w-12 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='printed_day' name='printed_day' required={true} onChange={handleChange} value={printed_day}
                        />
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Year
                        </label>
                        <input
                        className="peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} type='printed_year' name='printed_year' required={true} onChange={handleChange} value={printed_year}
                        />
                    </div>

                </div>
                <div className='text-sm'>No leading zeroes. Ex: if January, enter 1.</div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                        Publisher (Newspaper Company)
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='publisher_name' name='publisher_name' required={true} onChange={handleChange} value={publisher_name}
                        />
                    </div>
                </div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                        Page Number
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} type='page_number' name='page_number' required={true} onChange={handleChange} value={page_number}
                        />
                    </div>
                </div>
                
                <button type="submit" 
                className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    {isUpdating ? "Update" : "Publish"}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>

            </form>
            
        </div>
    )
}

export default Obituary