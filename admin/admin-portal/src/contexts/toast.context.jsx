import { createContext, useState } from "react";
import { Status } from "../enums/toastType.enum";


export const ToastContext = createContext(
    {
        isToasting: Boolean,
        setIsToasting: () => Boolean,
        toastMessage: String,
        setToastMessage: () => String,
        toastMessageType: Status,
        setToastMessageType: () => Status
    }
);


export const ToastProvider = ({ children }) => {
    const [isToasting, setIsToasting] = useState(false);
    const [toastMessage, setToastMessage] = useState("");
    const [toastMessageType, setToastMessageType] = useState(Status.SUCCESS);

    const updateIsToasting = (toast_state) => {
        setIsToasting(toast_state);
    }

    const updateToastMessage = (toast_message) => {
        setToastMessage(toast_message);
    }

    const updateToastMessageType = (toast_type) => {
        setToastMessageType(toast_type);
    }

    function makeAToast(message, message_type) {
        updateToastMessage(message);
        updateToastMessageType(message_type);
        updateIsToasting(true);
    }

    const value = {
        isToasting,
        updateIsToasting,
        toastMessage,
        updateToastMessage,
        toastMessageType,
        updateToastMessageType,
        makeAToast
    }

    return (
        <ToastContext.Provider value={value}> {children} </ToastContext.Provider>
    )
}