import { createContext, useState } from "react";

export const PublisherFilterContext = createContext({
    publisherFilter: "",
    setPublisherFilter: () => "",
});


export const PublisherFilterProvider = ({ children }) => {
    
    const [publisherFilter, setPublisherFilter] = useState("");

    const updatePublisherFilter = (publisher) => {
        if (publisher === "All") {
            setPublisherFilter("");
        }
        else{
            setPublisherFilter(publisher);
        }
    };


    // dont forget to expose values for external access/destructuring
    const value = {
        updatePublisherFilter,
        publisherFilter,
    };


    return (
        <PublisherFilterContext.Provider value={value}> {children} </PublisherFilterContext.Provider>
    );
};

