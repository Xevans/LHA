import { Fragment, useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { NewspaperContext } from "../../../../contexts/gpnews.context";
import Dropdown from "../dropdown/dropdown.component";

const GPnewsSideNav = () => {
    const { currentYear, updateYear } = useContext(NewspaperContext);

    // Get the current year using real time library.
    const getDecades = () => {
        const d = new Date();
        let years_since = d.getFullYear() - 1940; // years since 1940
        return Number(years_since.toString()[0]) + 1;
        
    }


    /*Have Each of the child list elements update the 'currentYear' with its year passed in. */
    return (
        <Fragment>
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {
                    /* For loop conditional render. Render a drop down for each decade applicable to this outlet */
                    [...Array(getDecades())].map((e, i) => <Dropdown key={i} year_index={i} />)
                }

            </ul>
        </Fragment>
    )
}

export default GPnewsSideNav;