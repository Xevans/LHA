import axios from "axios";

// retrieve all documents in a collection
export async function getCollection(collection_name) {
    const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}`);
    return response.data; // count and data
}

// Request a document given a collection name and document id
// Returns the document object.
export async function getDocByID(collection_name, document_id) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}/${document_id}`);
        return response.data;
    } catch (error) {
        console.log(error)
    }
}

// create a document. If ID exists, update rather than create
export async function createDoc(collection_name, data) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_ADMIN_UPLOAD}/${collection_name}`, data);
        
        //consoele.log(response.status);
        if (response.status == 500) { // server error
            return -1;   
        }
        
        if (response.status == 201) { // document created
            return 0;
        }

    } catch (error) {
        console.log(error);
        return -1;
    }
}