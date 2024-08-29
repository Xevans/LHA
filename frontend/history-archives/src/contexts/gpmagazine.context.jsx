import { createContext, useState, useEffect, useContext } from "react";
import { PublisherContext } from "./publisher.context";


export const GPMagazineContext = createContext({
    currentDecade: Number,
    setCurrentDecade: () => Number,
});


export const GPMagazineProvider = ({ children }) => {
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
        <GPMagazineContext.Provider value={value}> {children} </GPMagazineContext.Provider>
    );
};