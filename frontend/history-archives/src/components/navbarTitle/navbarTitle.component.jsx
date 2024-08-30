import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavbarTitle = (props) => {
    // determine which outlet and year to show.

    
    // operate on the incoming props
    const { publisher_code, title_year } = props;

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");


    useEffect(() => {
        switch (publisher_code) {
            case "gpnews":
                setTitle("Grosse Pointe News Archives");
                break;

            case "gpmagazine":
                setTitle("Grosse Pointe Magazine Archives");
                break;
        
            default:
                setTitle("Local History Archives")
                break;
        }

        if (title_year === 0) {
            setYear("");
        } else {
            setYear(title_year);
        }

        
    },[publisher_code, title_year]); // update when publisher code or year changes

    

    
    return (
        <div>

            <Link className="navbar-brand" to='/'>{`${title}`} <b> {`${year}`}</b></Link>
        </div>
    )
}

export default NavbarTitle;