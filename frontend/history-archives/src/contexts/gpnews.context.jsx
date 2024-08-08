import { createContext, useState, useEffect } from "react";

export const NewspaperContext = createContext({
    currentYear: Number,
    setCurrentYear: () => Number,
});


export const NewspaperProvider = ({ children }) => {
    const [currentYear, setCurrentYear] = useState(0);

    const updateYear = (year) => {
        setCurrentYear(year);
    };

    const value = {
        currentYear,
        updateYear,
    };

    return (
        <NewspaperContext.Provider value={value}> {children} </NewspaperContext.Provider>
    );
};