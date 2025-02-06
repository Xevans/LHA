import { useEffect, useState } from "react";
import axios from 'axios'
import SearchResults from "./searchResults.component";


const Searchbar = () => {

    /* Want to pack a json object to send to the db 
       paperless will send back all of the hits
       User can hit buttons and drop downs to filter the data (by year, hits, rank, etc.)
       Carefully plan the flow of information...
    */

    const defaultFormFields = { // pre-defineing state data because we know exactly what is going to go in there and know that should be the case every time
        query: ''
    }

    const [formFields, setFormFields] = useState(defaultFormFields);
    const {query} = formFields
    const [results, setResults] = useState([]);


    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }


    // update respective state values as user types
    const handleChange = (event) => {
        // update json data field with respective form field as the user types
        const { name, value } = event.target; // destructure/extract needed data from json obj
        setFormFields({...formFields, [name]: value}) //  only want to modify the value 'value' of the object memebers but with their respective key names '[name]'
    };
    

    useEffect(() => {
        //console.log(results);
        //console.log(query)
    },[query, formFields]);

    

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("here");
        let this_url = `http://localhost:8000/api/documents/?query=${formFields.query}`;
        let prefix = "Token "
        let API_token = prefix + "2c73522d50b145cf134e1383d297550a5b217539";

        try {
            const response = await axios.get(this_url, {headers: {Authorization: API_token} });
            //console.log(response);
            //console.log(response.data.results);
            setResults(response.data.results);
            console.log("success")
        } catch (error) {
            console.error('Error:', error);
        }
    }

    
    return (
        <div className="mt-10">
            <div>
            
                <form onSubmit={handleSubmit}>
                    <div className="flex rounded-md border-2 border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
                        
                        <input type="query" name="query" placeholder="Search Something..." onChange={handleChange} value={query}
                        className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-3"></input>
                        
                        <button type='submit' className="flex items-center justify-center bg-[#4275a9] px-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192.904 192.904" width="16px" className="fill-white">
                                <path
                                d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </form>

            </div>

            <div>
                { // if there are results to show, render results.
                // Change this to a switch render to handle: loading spinner, showing results component, and no results message
                    results.length > 0 &&
                    <SearchResults results={results} />
                }

            </div>
        </div>
    );
}
export default Searchbar