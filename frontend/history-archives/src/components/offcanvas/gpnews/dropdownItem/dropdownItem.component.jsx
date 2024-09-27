import { useContext } from "react";
import { YearContext } from "../../../../contexts/yearContext.context";

import './dropdownItem.scss';

// will take a prop consisting of the year to add.
// will update the year state in Year
const DropdownItem = (props) => {

    const { decade, year_index } = props;

    const { updateYear } = useContext(YearContext);

    //console.log(currentYear);

    return (
        <li onClick={() => updateYear(decade + year_index)} className="dropdown-item">{decade + year_index}</li>
    )
}

export default DropdownItem;