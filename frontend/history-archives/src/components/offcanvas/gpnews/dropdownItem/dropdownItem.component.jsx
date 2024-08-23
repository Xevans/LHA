import { useContext } from "react";
import { NewspaperContext } from "../../../../contexts/gpnews.context";

import './dropdownItem.scss';

// will take a prop consisting of the year to add.
// will update the year state in newspaper
const DropdownItem = (props) => {

    const { decade, year_index } = props;

    const { currentYear, updateYear } = useContext(NewspaperContext);

    //console.log(currentYear);

    return (
        <li onClick={() => updateYear(decade + year_index)} className="dropdown-item">{decade + year_index}</li>
    )
}

export default DropdownItem;