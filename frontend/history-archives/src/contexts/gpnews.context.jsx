import { createContext, useState, useEffect, useContext } from "react";
import { PublisherContext } from "./publisher.context";

export const NewspaperContext = createContext({
    currentYear: Number,
    setCurrentYear: () => Number,
});


export const NewspaperProvider = ({ children }) => {
    const [currentYear, setCurrentYear] = useState(0);

    const updateYear = (year) => {
        setCurrentYear(year);
    };


    // if publisher changes reset this state for next arrival at gpnews
    // this is how gpnews component determines what to render
    const { currentPublisher } = useContext(PublisherContext);
    useEffect(() => {
        updateYear(0);
    }, [currentPublisher]);

    

    const value = {
        currentYear,
        updateYear,
    };

    return (
        <NewspaperContext.Provider value={value}> {children} </NewspaperContext.Provider>
    );
};