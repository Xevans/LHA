import { Link } from "react-router-dom";
import DropdownItem from "../dropDownItem/GPReviewDropdownItem.component";
import { useState } from "react";

const Dropdown = (props) => {

    const { year_index, lower_bound, upper_bound } = props;

    const [isShowing, setIsShowing] = useState(false);


    // determine year using index
    const determineDecade = () => {
        return lower_bound + (10 * year_index)
    } 

    // if the current decade is the current real time decade, stop rendering dropdown items at current year.
    // this is to avoid overshooting the current year in the last dropdown.
    const checkCurrentDecadeAndRender = () => {
        let last_decade = Number(upper_bound.toString()[2]) ; //ex: if 19(3)2 
        let current_dropdown_decade = Number(determineDecade().toString()[2])

        if (last_decade === current_dropdown_decade) {
            return (
                [...Array(getYearsToRender())].map((e, i) => <DropdownItem key={i} decade={determineDecade()} year_index={i} />)
            )
        }
        /*else if (current_dropdown_decade === 3) {
            return (
                [...Array(3)].map((e, i) => <DropdownItem key={i} decade={determineDecade()} year_index={i} />)
            )
        } */
        else {
            return (
                [...Array(10)].map((e, i) => <DropdownItem key={i} decade={determineDecade()} year_index={i} />)
            )
        }
    }

    const getYearsToRender = () => {
        return Number(upper_bound.toString()[3]) + 1;
    }

    function toggleYearsList() {
        if (isShowing) {
            setIsShowing(false);
        }
        else {
            setIsShowing(true)
        }
    }

    return (
        <li className={`${isShowing ? 'border-b border-gray-400 dark:border-gray-300' : ''}`}>
            <div className="flex flex-row mt-3" onClick={() => toggleYearsList()}>
                {/*toggle between showing > and v when drop down is active. 
                
                    Indent list, add dividers*/
                    isShowing &&
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M18.425 10.271C19.499 8.967 18.57 7 16.88 7H7.12c-1.69 0-2.618 1.967-1.544 3.271l4.881 5.927a2 2 0 0 0 3.088 0l4.88-5.927Z" clipRule="evenodd"/>
                    </svg>
                }
                {
                    !isShowing &&
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M10.271 5.575C8.967 4.501 7 5.43 7 7.12v9.762c0 1.69 1.967 2.618 3.271 1.544l5.927-4.881a2 2 0 0 0 0-3.088l-5.927-4.88Z" clipRule="evenodd"/>
                    </svg>

                }
                <div className="font-semibold text-lg">
                    {determineDecade()}s
                </div>
            </div>
            
            {/* child list of years for the decade dropdown component */}
            <ul className='p4'>
                {
                    /* For loop conditional render */
                    // if checkCurrentDecade is true, render a set amount of dropdownitems
                    // otherwise, render all 10
                    isShowing &&
                    checkCurrentDecadeAndRender()
                }
            </ul>
        </li>
    )
} 

export default Dropdown;