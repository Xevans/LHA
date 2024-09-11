import { Link } from "react-router-dom"
import DropdownItem from "../dropdownItem/dropdownItem.component";

const Dropdown = (props) => { // i you pass an object, add curly braces, otherwise dont.

    const { year_index, lower_bound, upper_bound } = props;


    // determine year using index
    const determineDecade = () => {
        return lower_bound + (10 * year_index)
    } 

    // if the current decade is the current real time decade, stop rendering dropdown items at current year.
    // this is to avoid overshooting the current year in the last dropdown.
    const checkCurrentDecadeAndRender = () => {
        let current_real_time_decade = Number(upper_bound.toString()[2]) ;
        let current_dropdown_decade = Number(determineDecade().toString()[2])

        if (current_real_time_decade === current_dropdown_decade) {
            return (
                [...Array(getYearsToRender())].map((e, i) => <DropdownItem key={i} decade={determineDecade()} year_index={i} />)
            )
        } 
        else {
            return (
                [...Array(10)].map((e, i) => <DropdownItem key={i} decade={determineDecade()} year_index={i} />)
            )
        }
    }

    const getYearsToRender = () => {
        return Number(upper_bound.toString()[3]) + 1;
    }

    return (
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {determineDecade()}s
            </Link>
            
            <ul className="dropdown-menu">
                {
                    /* For loop conditional render */
                    // if checkCurrentDecade is true, render a set amount of dropdownitems
                    // otherwise, render all 10

                    checkCurrentDecadeAndRender()
                }
            </ul>
        </li>
    )
}

export default Dropdown;