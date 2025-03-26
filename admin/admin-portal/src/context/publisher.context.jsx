import { createContext, useState } from "react";

export const ADMPublisherContext = createContext({
    currentPublisher: "",
    setCurrentPublisher: () => "",
    publisherName: "",
    setPublisherName: () => "",
});

const updatePublisherName = (publisher_code) => {

    switch (publisher_code) {
        case "gp_news":
            return "Grosse Pointe News";
        
        case "gp_magazine":
            return "Grosse Pointe Magazine";
        
        case "gp_civic":
            return "Grosse Pointe Civic";

        case "gp_heritage":
            return "Grosse Pointe Heritage";

        case "gp_review":
            return "Grosse Pointe Review";
    
        default:
            return ""
    }

} 


export const ADMPublisherProvider = ({ children }) => {
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
        <ADMPublisherContext.Provider value={value}> {children} </ADMPublisherContext.Provider>
    );
};
