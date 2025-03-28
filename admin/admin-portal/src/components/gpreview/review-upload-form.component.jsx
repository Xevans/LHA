import { useState } from 'react';
import axios from 'axios';



const GPReviewUploadForm = () => {

     //default states for sign-in form members
    const defaultFormFields = { // pre-defineing state data because we know exactly what is going to go in there and know that should be the case every time
        title: '',
        fileURL: '',
        publishMonth: 0,
        publishYear: 0,
        publishDay: 0
    }


    /* state tracking */
    const [formFields, setFormFields] = useState(defaultFormFields); //setting default state// returns the default fields and setformfield logic to the array elements respectively
    const { title, fileURL, publishMonth, publishYear, publishDay } = formFields // destructure values from json obj for short handing
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // update respective state values as user types
    const handleChange = (event) => {
        // update json data field with respective form field as the user types
        const { name, value } = event.target; // destructure/extract needed data from json obj
        setFormFields({...formFields, [name]: value}) //  only want to modify the value 'value' of the object memebers but with their respective key names '[name]'
    };


    // user submits their email and password for sign in
    const handleSubmit = async (event) => {
        // do upload
        event.preventDefault();
        console.log('here');
        formFields.fileURL = "http://digitize.gp.lib.mi.us/history/newspapers/gpreview/" + fileURL + ".pdf";
        formFields.title = "" + String(formFields.publishMonth) + "-" + String(formFields.publishDay) + "-" + String(formFields.publishYear);
        console.log(formFields);
        let data = [formFields];


        
        
        try {
            const response = await axios.post(`${import.meta.env.VITE_APP_ADMIN_EXPRESS}/gp_review`, data);
            console.log(response.data); // Handle response data
            console.log("Data Sent successfully!");
      
          } catch (error) {
            console.error('Error:', error);
          }

        resetFormFields(); // reset states of each field value
    }

    /*useEffect( () => { // useEffect does not like being declared as asyncronous, had to separate code inside a function called doRedirectResult
        //doRedirectResult();
    }, [])*/



    return (
        <div>
            <div className='mt-8'>
                <h2 className='text-lg font-semibold'>Route: Grosse Pointe Review</h2>
            </div>
            
            <form onSubmit={handleSubmit}>

            
                {/*<div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input className='form-control' placeholder='Format: MM-DD-YYYY' type='title' name='title' required={true} onChange={handleChange} value={title}></input>
                </div>*/}

                <div className="mt-4 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        type='fileURL' name='fileURL' required={true} onChange={handleChange} value={fileURL}
                        />
                        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-700 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        File URL
                        </label>
                        <div className='flex flex-row'>
                            <div className='flex-1 text-sm text-'>Example: 2020s/2024/pdf/2024-01-04</div>
                            <div className='text-sm'>Do not add extention.</div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className='text-xl mt-4'>
                        Completed URL Preview
                    </div>

                    <div className='text-sm'>
                    https://digitize.gp.lib.mi.us/history/newspapers/gpreview/{fileURL}.pdf
                    </div>
                </div>

                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='publishMonth' name='publishMonth' required={true} onChange={handleChange} value={publishMonth}
                        />
                        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-700 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Publish Month
                        </label>
                        <div className="text-sm">Ex: if month = July, enter 7</div>
                    </div>
                </div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={4} type='publishYear' name='publishYear' required={true} onChange={handleChange} value={publishYear}
                        />
                        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-700 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Publish Year
                        </label>
                        <div className="text-sm">Ex: 2024</div>
                    </div>
                </div>


                <div className="mt-8 w-full max-w-xl min-w-[200px]">
                    <div className="relative">
                        <input
                        className="peer w-full bg-transparent placeholder:text-slate-400 text-grey-500 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                        maxLength={2} type='publishDay' name='publishDay' required={true} onChange={handleChange} value={publishDay}
                        />
                        <label className="absolute cursor-text bg-white px-1 left-2.5 top-2.5 text-slate-700 text-sm transition-all transform origin-left peer-focus:-top-2 peer-focus:left-2.5 peer-focus:text-xs peer-focus:text-slate-400 peer-focus:scale-90">
                        Publish Day
                        </label>
                        <div className="text-sm">Ex: 1</div>
                    </div>
                </div>
                
                <button type="submit" 
                className="mt-8 cursor-pointer flex items-center rounded-md border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                    Publish
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-1.5">
                        <path fillRule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                    </svg>
                </button>

            </form>
            
        </div>
    )
}

export default GPReviewUploadForm