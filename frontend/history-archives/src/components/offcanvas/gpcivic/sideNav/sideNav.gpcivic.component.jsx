import { Fragment, useEffect, useState } from "react";
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
                    let response_high = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER}/gp_civic/high`);
                    const high = response_high.data.data;
                    //console.log(high[0].publishYear);
                    setUpperBound(high[0].publishYear);

                    let response_low = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER}/gp_civic/low`);
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
                    <Fragment>
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </Fragment>
                );
            }
            else {
                return (
                    <Fragment>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            {
                                /* For loop conditional render. Render a drop down for each decade applicable to this outlet */
                                [...Array(getDecades())].map((e, i) => {
                                    let decade = determineDecade(i);    
                                    return <SideNavItem key={i} decade={decade} />
                                })
                            }
    
                        </ul>
                    </Fragment>
                )
            }
        }
        else {
            return (
                <Fragment>
                    <div className="alert alert-warning" role="alert">
                        Unable to reach server. Please check your connection or try again later.
                    </div>
                </Fragment>
            );
        }
    }
    

    return (
        <Fragment>
            {loadingSwitch()}
        </Fragment>
    )
}

export default GPCivicSideNav;