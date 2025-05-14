import axios from "axios";

// retrieve all documents in a collection
export async function getCollection(collection_name) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/${collection_name}`);
        return response.data; // count and data
    } catch (error) {
        console.error(error);
    }
}