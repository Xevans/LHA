import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const NavbarTitle = (props) => {
    // determine which outlet and year to show.

    
    // operate on the incoming props
    const { publisher_code, title_year, title_decade } = props;

    const [title, setTitle] = useState("");
    const [year, setYear] = useState("");
    const [decade, setDecade] = useState("");


    useEffect(() => {
        switch (publisher_code) {
            case "gpnews":
                setTitle("Grosse Pointe News Archival");
                break;

            case "gpmagazine":
                setTitle("Grosse Pointe Magazine Archival");
                break;

            case "gpcivic":
                setTitle("Grosse Pointe Civic Archival");
                break;

            case "gpheritage":
                setTitle("Grosse Pointe Heritage Archival");
                break;

            case "gpreview":
                setTitle("Grosse Pointe Review Archival");
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

        if (title_decade === 0) {
            setDecade("");
        } else {
            setDecade(title_decade + "s");
        }

        
    },[publisher_code, title_year, title_decade]); // update when publisher code or year changes

    

    
    return (
        <div>
            <Link className="font-semibold text-xl"> 
                {`${title}`} <b> {`${year}`}{`${decade}`}</b> 
            </Link>
        </div>
    )
}

export default NavbarTitle;