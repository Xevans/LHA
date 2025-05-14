import { createContext, useState } from "react";

export const PublisherContext = createContext({
    currentPublisher: "",
    setCurrentPublisher: () => "",
    publisherName: "",
    setPublisherName: () => "",
});

const updatePublisherName = (publisher_code) => {

    switch (publisher_code) {
        case "gpnews":
            return "Grosse Pointe News";
        
        case "gpmagazine":
            return "Grosse Pointe Magazine";
        
        case "gpcivic":
            return "Grosse Pointe Civic";

        case "gpheritage":
            return "Grosse Pointe Heritage";

        case "gpreview":
            return "Grosse Pointe Review";
        
        case "obituary":
            return "Obituary Database";
    
        default:
            return ""
    }

} 


export const PublisherProvider = ({ children }) => {
    const [currentPublisher, setCurrentPublisher] = useState("");
    const [publisherName, setPublisherName] = useState("");

    const updatePublisher = (publisher_code) => {
        setCurrentPublisher(publisher_code);
        setPublisherName(updatePublisherName(publisher_code));
    };


    // dont forget to expose values for external access/destructuring
    const value = {
        currentPublisher,
        updatePublisher,
        publisherName,
    };

    // original idea to update newspaper context in publisher
    // redatacted because this apprach introduces considerable overhead and coupling between contexts
    /*const { updateYear} = useContext(NewspaperContext);
    useEffect(() => {
        updateYear(0);
    }, [currentPublisher])*/


    return (
        <PublisherContext.Provider value={value}> {children} </PublisherContext.Provider>
    );
};

