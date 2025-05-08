import { useEffect, useState } from "react";
import SideNavItem from "../sideNavItem/sideNavItem.component";
import axios from "axios";

const GPCivicSideNav = () => {

    const [upper_bound, setUpperBound] = useState(0);
    const [lower_bound, setLowerBound] = useState(0);
    const [isloading, setIsLoading] = useState(false);
    const [hasFailed, setHasFailed] = useState(false);



    useEffect(() => {
        // make call to low and high end points and store the lowest and largest year values returned. Will be used to determine render range.
        try {
            async function getHighAndLow() {
                setIsLoading(true);
                try {
                    let response_high = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_civic/high`);
                    const high = response_high.data.data;
                    //console.log(high[0].publishYear);
                    setUpperBound(high[0].publishYear);

                    let response_low = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_civic/low`);
                    const low = response_low.data.data;
                    //console.log(low[0].publishYear);
                    
                    // set from 1923 to 1920
                    let floored_lower = low[0].publishYear.toString();
                    let charArr = floored_lower.split("");
                    charArr[3] = "0";
                    floored_lower = charArr.join("");
                    setLowerBound(Number(floored_lower));
                    setHasFailed(false);
                    
                } catch (error) {
                    setHasFailed(true);
                    console.log(error);
                }
                setIsLoading(false);
            }

            getHighAndLow();

        } catch (error) {
            console.log(error);
        }
    }, []);

    const getDecades = () => {
        let x = lower_bound;
        let count = 0;
        // inc x by 10 every time a decade is rendered until x is larger than upper bound
        while (x <= upper_bound) {
            count = count + 1;
            x = x + 10;
        } 
        return count;
    }

    const determineDecade = (year_index) => {
        return lower_bound + (10 * year_index);
    }


    const loadingSwitch = () => {
        if (!hasFailed) {
            if (isloading) {
                return (
                    <>
                        <div role="status">
                            <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="sr-only">Loading...</span>
                        </div>
                    </>
                );
            }
            else {
                return (
                    <>
                        <hr className="h-px my-3 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                        <h3 className="my-3 font-bold dark:text-white"> Grosse Pointe Civic</h3>
                        <ul className="dark:text-white">
                            {
                                /* For loop conditional render. Render a drop down for each decade applicable to this outlet */
                                [...Array(getDecades())].map((e, i) => {
                                    let decade = determineDecade(i);    
                                    return <SideNavItem key={i} decade={decade} />
                                })
                            }
    
                        </ul>
                    </>
                )
            }
        }
        else {
            return (
                <>
                    <div className="mt-3 p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50 dark:bg-gray-700 dark:text-yellow-300" role="alert">
                        <span className="font-medium">Warning!</span> Unable to reach server. Please check your connection or try again later.
                    </div>
                </>
            );
        }
    }
    

    return (
        <>
            {loadingSwitch()}
        </>
    )
}

export default GPCivicSideNav;