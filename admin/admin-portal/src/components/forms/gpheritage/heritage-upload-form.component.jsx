import { useContext, useState } from 'react';
import axios from 'axios';
import { createDoc, getDocByID } from '../../../utils/admin-backend.util';
import { ToastContext } from '../../../contexts/toast.context';
import { Status } from '../../../enums/toastType.enum';

const GPHeritageUploadForm = () => {

     //default states for sign-in form members
    const defaultFormFields = { // pre-defineing state data because we know exactly what is going to go in there and know that should be the case every time
        _id: '',
        title: '',
        fileURL: '',
        publishMonth: 1,
        publishYear: 2000,
        publishDecade: 2000
    }


    /* state tracking */
    const [formFields, setFormFields] = useState(defaultFormFields); //setting default state// returns the default fields and setformfield logic to the array elements respectively
    const { fileURL, publishMonth, publishYear, publishDecade } = formFields // destructure values from json obj for short handing
    const [recordID, setRecordID] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const { makeAToast } = useContext(ToastContext);

    // update respective state values as user types
    const handleChange = (event) => {
        // update json data field with respective form field as the user types
        const { name, value } = event.target; // destructure/extract needed data from json obj
        setFormFields({...formFields, [name]: value}) //  only want to modify the value 'value' of the object memebers but with their respective key names '[name]'
    };


    // process and send request to create record with data.
    const handleSubmit = async (event) => {
        // do upload
        event.preventDefault();
        formFields.fileURL = "http://digitize.gp.lib.mi.us/history/magazines/heritage/" + fileURL + ".pdf";
        
        if (formFields.publishMonth < 10) {
            formFields.title = "0" + String(formFields.publishMonth);
        }
        else {
            formFields.title = "" + String(formFields.publishMonth);
        }
        
        let data = [formFields];
        
        try {
            const collection_name = "gp_heritage";
            const response = await createDoc(collection_name, data);

            if (response == -1) {
                throw new Error("Record could not be created.");
            }

            if (isUpdating) {
                makeAToast("Record Updated!", Status.SUCCESS);
            }
            else {
                makeAToast("Record Published!", Status.SUCCESS);
            }

            resetFormFields(); // reset states of each field value
            setRecordID("");
            setIsUpdating(false);
      
        } catch (error) {
            console.error('Error:', error);
            makeAToast(`Submission Failed: ${error}`, Status.ERROR);
        }
    }

    function handleIDChange(event) {
        const {value} = event.target
        setRecordID(value);
    }

    async function handleFetchRecord() {
        const collection_name = "gp_heritage";

        if (recordID.length < 1) {
            throw new Error("Enter something in the fetch field.");
        }

        try {
            const response = await getDocByID(collection_name, recordID);
            
            if (!response) {
                throw new Error("No Matching Record");
            }

            const data = {
                _id: recordID,
                title: '',
                fileURL: response.fileURL,
                publishMonth: response.publishMonth,
                publishYear: response.publishYear,
                publishDecade: response.publishDecade  
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
                <h2 className='text-lg font-semibold'>Route: Grosse Pointe Heritage</h2>
            </div>

            <div className='mt-4'>
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

                    <div className='mt-10 font-semibold'>
                        Newspaper Details
                    </div>

                <div className="mt-4 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <label className="block mb-2 text-sm text-slate-600">
                        Resource URL (Path to the statically served file i.e. newspaper file.)
                        </label>
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='fileURL' name='fileURL' required={true} onChange={handleChange} value={fileURL}
                        />
                        <div className='flex flex-row'>
                            <div className='flex-1 text-sm text-'>Example: 1985-89/85/1985-02-03</div>
                            <div className='text-sm'>Do not add extention.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <a href={`https://digitize.gp.lib.mi.us/history/magazines/heritage/${fileURL}.pdf`} target='_blank'>
                        <button type='button'
                        className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                            Test URL
                        </button>
                    </a>
                </div>


                <div className='mt-8'>
                    <label className="block mb-2 text-sm text-slate-600">
                        Completed Resource URL
                    </label>
                    
                    <div className="w-full max-w-2xl min-w-[200px]">
                        <input disabled value={`https://digitize.gp.lib.mi.us/history/magazines/heritage/${fileURL}.pdf`} className="w-full bg-slate-200 pointer-events-none placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                    </div>
                </div>



                <div className="mt-8 w-full max-w-xl min-w-[200px] flex flex-row">

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Month
                        </label>
                        <input
                        className="peer w-16 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='number' min={1} name='publishMonth' required={true} onChange={handleChange} value={publishMonth}
                        />
                        
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Year
                        </label>
                        <input
                        className="peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} minLength={4} type='number' min={1000} name='publishYear' required={true} onChange={handleChange} value={publishYear}
                        />
                    </div>

                    <div className="relative pr-3">
                        <label className="block mb-2 text-sm text-slate-600">
                            Decade
                        </label>
                        <input
                        className="peer w-18 bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} minLength={4} type='number' min={2000} name='publishDecade' required={true} onChange={handleChange} value={publishDecade}
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

export default GPHeritageUploadForm