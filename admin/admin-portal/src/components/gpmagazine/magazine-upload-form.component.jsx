import { useState } from 'react';
import axios from 'axios';

import {UploadContainer, ButtonsContainer} from "./upload-form.styles.jsx"


const GPMagazineUploadForm = () => {

     //default states for sign-in form members
    const defaultFormFields = { // pre-defineing state data because we know exactly what is going to go in there and know that should be the case every time
        title: '',
        fileURL: '',
        publishMonth: 0,
        publishYear: 0,
        publishDecade: 0
    }


    /* state tracking */
    const [formFields, setFormFields] = useState(defaultFormFields); //setting default state// returns the default fields and setformfield logic to the array elements respectively
    const { title, fileURL, publishMonth, publishYear, publishDecade } = formFields // destructure values from json obj for short handing
    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // update respective state values as user types
    const handleChange = (event) => {
        // update json data field with respective form field as the user types
        const { name, value } = event.target; // destructure/extract needed data from json obj
        setFormFields({...formFields, [name]: value}) //  only want to modify the value 'value' of the object memebers but with their respective key names '[name]'
    };


    const getDecade = (year) => { // building decade by concatenating string where last digit is zero (hard coded).
        let temp = String(year);
        let d = "";
        for (let index = 0; index < temp.length-1; index++) {
            d += temp[index];
        }
        d += "0";
        Number(d);
        return d;
    }


    // user submits their email and password for sign in
    const handleSubmit = async (event) => {
        // do upload
        event.preventDefault();
        console.log('here');
        formFields.fileURL = "http://digitize.gp.lib.mi.us/history/magazines/gp_magazine/" + fileURL + ".pdf";
        let this_decade = getDecade(formFields.publishYear);
        formFields.publishDecade = this_decade;
        console.log(formFields);
        let data = [formFields];
        
        
        try {
            const response = await axios.post(`${process.env.REACT_APP_ADMIN_EXPRESS}/gp_magazine`, data);
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
        <UploadContainer>
            <h2>Grosse Pointe Magazine Upload</h2>
            <span>Enter details below</span>
            <form onSubmit={handleSubmit}>

            
                <div className='mb-3'>
                    <label className='form-label'>Title</label>
                    <input className='form-control' placeholder='Example title: Apr-May' type='title' name='title' required={true} onChange={handleChange} value={title}></input>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>File URL</label>
                    <div className='input-group'>
                        <span className="input-group-text">http://digitize.gp.lib.mi.us/history/magazines/gp_magazine/</span>
                        <input className="form-control" placeholder='2010-2014/2012/2012/April-May' type='fileURL' name='fileURL' required={true} onChange={handleChange} value={fileURL}></input>
                        <span className="input-group-text">.pdf</span>
                    </div>
                    <div className="form-text">Exclude prepended path and file extention.</div>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Publish Month</label>
                    <input className='form-control' maxLength={2} type='publishMonth' name='publishMonth' required={true} onChange={handleChange} value={publishMonth}></input>
                    <div className="form-text">Ex: if month = July, enter 7</div>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Publish Year</label>
                    <input className='form-control' maxLength={4} type='publishYear' name='publishYear' required={true} onChange={handleChange} value={publishYear}></input>
                    <div className="form-text">Ex: 2024</div>
                </div>

                <ButtonsContainer>
                    <button type="submit" className="btn btn-primary">Upload</button>
                </ButtonsContainer>

            </form>
            
        </UploadContainer>
    )
}

export default GPMagazineUploadForm