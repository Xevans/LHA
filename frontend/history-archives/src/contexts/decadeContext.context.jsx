import { createContext, useState, useEffect, useContext } from "react";
import { PublisherContext } from "./publisher.context";


export const DecadeContext = createContext({
    currentDecade: Number,
    setCurrentDecade: () => Number,
});


export const DecadeProvider = ({ children }) => {
    const [currentDecade, setCurrentDecade] = useState(0);

    const updateDecade = (decade) => {
        setCurrentDecade(decade);
    }

    const { currentPublisher } = useContext(PublisherContext);
    useEffect(() => {
        updateDecade(0);
    }, [currentPublisher]);

    const value = {
        currentDecade,
        updateDecade,
    };

    return (
        <DecadeContext.Provider value={value}> {children} </DecadeContext.Provider>
    );
};