import { createContext, useState, useEffect } from "react";

export const PublisherContext = createContext({
    currentPublisher: "",
    setCurrentPublisher: () => "",
});



export const PublisherProvider = ({ children }) => {
    const [currentPublisher, setCurrentPublisher] = useState("testing...");


    const updatePublisher = (publisher_name) => {
        setCurrentPublisher(publisher_name);
    };


    // dont forget to expose values for external access/destructuring
    const value = {
        currentPublisher,
        updatePublisher,
    };


    return (
        <PublisherContext.Provider value={value}> {children} </PublisherContext.Provider>
    );
};

