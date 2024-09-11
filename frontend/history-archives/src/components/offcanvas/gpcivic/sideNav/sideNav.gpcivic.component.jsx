import { Fragment, useEffect, useState } from "react";
import SideNavItem from "../sideNavItem/sideNavItem.component";
import axios from "axios";

const GPCivicSideNav = () => {

    const [upper_bound, setUpperBound] = useState(0);
    const [lower_bound, setLowerBound] = useState(0);

    useEffect(() => {
        // make call to low and high end points and store the lowest and largest year values returned. Will be used to determine render range.
        try {
            async function getHighAndLow() {
                try {
                    let response_high = await axios.get('http://127.0.0.1:5555/gp_civic/high');
                    const high = response_high.data.data;
                    //console.log(high[0].publishYear);
                    setUpperBound(high[0].publishYear);

                    let response_low = await axios.get('http://127.0.0.1:5555/gp_civic/low');
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
            }

            getHighAndLow();

        } catch (error) {
            console.log(error);
        }
    }, []);

    const getDecadesSince = () => {
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
    

    return (
        <Fragment>
            {
                [...Array(getDecadesSince())].map((e, i) => {
                    let decade = determineDecade(i); // i is the iterator 0..1..2.. 
                    return <SideNavItem key={i} decade={decade} />
                })
            }
        </Fragment>
    )
}

export default GPCivicSideNav;