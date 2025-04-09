import axios from "axios";
// retrieve all documents in a collection

export async function getCollection(collection_name) {

    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}`);
    //console.log(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}`);
    //console.log(response);
    return response.data; // count and data
}