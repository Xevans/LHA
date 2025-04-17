import axios from "axios";

// retrieve all documents in a collection
export async function getCollection(collection_name) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}`);
        return response.data; // count and data
    } catch (error) {
        console.error(error);
    }
}

// Request a document given a collection name and document id
// Returns the document object.
export async function getDocByID(collection_name, document_id) {
    try {
        const response = await axios.get(`${import.meta.env.VITE_APP_BACKEND_ROOT}/${collection_name}/${document_id}`);
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

// create a document. If ID exists, update rather than create
// accepts a collection string ID and an object representing the document
export async function createDoc(collection_name, data) {
    try {
        const response = await axios.post(`${import.meta.env.VITE_APP_ADMIN_UPLOAD}/${collection_name}`, data);
        
        //consoele.log(response.status);
        if (response.status == 500) { // server error
            throw new Error("Create Document Failed.");
              
        }
        
        if (response.status == 201 || response.status == 200) { // document created
            return 0;
        }

    } catch (error) {
        console.error(error);
        return -1;
    }
}

// delete a record in a collection with the matching id
// accepts a collection name and the ID of the document to delete
// returns an integer representing success/fail
export async function deleteDoc(collection_name, document_id) {
    try {
        const response = await axios.delete(`${import.meta.env.VITE_APP_ADMIN_MANAGE}/${collection_name}/delete/${document_id}`);

        if (response.status == 200) {
            return 0
        }
        else {
            throw new Error("Delete Operation Failed.");
        }
    } catch (error) {
        console.error(error)
        return -1
    }
}