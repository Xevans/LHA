import { useContext, useEffect, useState } from "react";
import { ToastContext } from "../../contexts/toast.context";
import { Status } from "../../enums/toastType.enum";


const Toast = () => {

    const {
        isToasting,
        updateIsToasting,
        toastMessage,
        updateToastMessage,
        toastMessageType,
        updateToastMessageType
    } = useContext(ToastContext);


    /*function determineToastType() { // shouldn't be necessary. May revise so that 
        switch (toastMessageType) {
            case "SUCCESS":
                setMType(Status.SUCCESS);
                break;
        
            default:
                break;
        }
    }*/

    useEffect(() => {
        // treating useEffect like a wakeup alarm using an observer pattern
        const timer = setTimeout(() => {
            updateIsToasting(false);
            updateToastMessage('');
            updateToastMessageType(Status.SUCCESS);
        }, 5000); // reset toast context states after 5 sec.

        return () => clearTimeout(timer);

    }, [isToasting])

    return (
        <>
            {isToasting &&

                <div className={`ml-auto mr-auto mb-10 ${toastMessageType} rounded-4xl max-w-sm`}>
                    <div className="p-4 text-center text-white text-2xl font-semibold">
                        {toastMessage}
                    </div>
                </div>

            }

            {/*
            
            <div className={`${isToasting ? '' : 'hidden'} ml-auto mr-auto mb-10 ${toastMessageType} rounded-4xl max-w-sm`}>
                <div className="p-4 text-center text-white text-2xl font-semibold">
                    {toastMessage}
                </div>
            </div>
            */}
        </>
    );

}

export default Toast;