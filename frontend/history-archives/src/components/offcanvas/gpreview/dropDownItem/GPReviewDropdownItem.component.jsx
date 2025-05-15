import { useContext } from "react";
import { YearContext } from "../../../../contexts/yearContext.context";

const GPReviewDropdownItem = (props) => {

    const { decade, year_index } = props;

    const { updateYear } = useContext(YearContext);

    return (
        <div>
            <li onClick={() => updateYear(decade + year_index)} className="pl-5 py-1 my-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl">
                {decade + year_index}
            </li>
        </div>
    )
}

export default GPReviewDropdownItem;