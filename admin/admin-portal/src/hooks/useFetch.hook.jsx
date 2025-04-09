
import axios from "axios";
import { useEffect, useState } from "react";

function useFetch(endpoint) {

    // loading states
    // data states
    const [data, setData] = useState({});

    async function doFetch() {
        const response = await axios.get(`${import.meta.env.VITE_APP_ADMIN_EXPRESS}${endpoint}`);
        console.log(response);
    }


    useEffect(() => {
        console.log("here");
        doFetch();

    }, []);
} 

export default useFetch;