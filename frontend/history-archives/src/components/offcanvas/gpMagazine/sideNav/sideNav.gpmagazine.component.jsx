import { useContext, Fragment } from "react";
import { GPMagazineContext } from "../../../../contexts/gpmagazine.context";
import SideNavItem from "../sideNavItem/sideNavItem.gpmagazine.component";


const GPMagazineSideNav = () => {

    const { currentDecade, updateDecade } = useContext(GPMagazineContext);

    const getDecades = () => { // want a count of decades since 2010
        const d = new Date();
        let years_since = d.getFullYear() - 2010; // years since 1940
        return Number(years_since.toString()[0]) + 1;
        
    }

    const determineDecade = (year_index) => {
        return 2010 + (10 * year_index)
    } 

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

export default GPMagazineSideNav;