import { Fragment, useEffect, useState } from "react"
import axios from "axios";
import Dropdown from "../dropdown/dropdown.component";

const GPnewsSideNav = () => {

    const [upper_bound, setUpperBound] = useState(0);
    const [lower_bound, setLowerBound] = useState(0);
    const [isloading, setIsLoading] = useState(false);


    useEffect(() => {
        // make call to low and high end points and store the lowest and largest year values returned. Will be used to determine render range.
        try {
            async function getHighAndLow() {
                setIsLoading(true);
                try {
                    let response_high = await axios.get('http://127.0.0.1:5555/gp_news/high');
                    const high = response_high.data.data;
                    //console.log(high[0].publishYear);
                    setUpperBound(high[0].publishYear);

                    let response_low = await axios.get('http://127.0.0.1:5555/gp_news/low');
                    const low = response_low.data.data;
                    //console.log(low[0].publishYear);
                    
                    // set from 1923 to 1920
                    let floored_lower = low[0].publishYear.toString();
                    let charArr = floored_lower.split("");
                    charArr[3] = "0";
                    floored_lower = charArr.join("");
                    setLowerBound(Number(floored_lower));
                    
                } catch (error) {
                    console.log(error);
                }
                setIsLoading(false);
            }

            getHighAndLow();

        } catch (error) {
            console.log(error);
        }
    }, []);


    // Determine how many times to iterate.
    const getDecades = () => {
        let x = lower_bound;
        console.log(lower_bound);
        console.log(upper_bound);
        let count = 0;
        // inc x by 10 every time a decade is rendered until x is larger than upper bound
        while (x <= upper_bound) {
            count = count + 1;
            x = x + 10;
        } 
        return count;
        
    }

    const loadingSwitch = () => {
        if (isloading) {
            return (
                <Fragment>
                    <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
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
                            [...Array(getDecades())].map((e, i) => <Dropdown key={i} year_index={i} lower_bound={lower_bound} upper_bound={upper_bound} />)
                        }

                    </ul>
                </Fragment>
            )
        }
    }

    /*Have Each of the child list elements update the 'currentYear' with its year passed in. */
    return (
        <Fragment>
            {loadingSwitch()}
        </Fragment>
    )
}

export default GPnewsSideNav;