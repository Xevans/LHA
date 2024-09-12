import { useContext } from "react";
import { YearContext } from "../../../../contexts/yearContext.context";

const GPReviewDropdownItem = (props) => {

    const { decade, year_index } = props;

    const { currentYear, updateYear } = useContext(YearContext);

    return (
        <div>
            <li onClick={() => updateYear(decade + year_index)} className="dropdown-item">{decade + year_index}</li>
        </div>
    )
}

export default GPReviewDropdownItem;