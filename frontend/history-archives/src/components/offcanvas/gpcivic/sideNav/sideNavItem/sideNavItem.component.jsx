import { useContext } from "react";
import { Link } from "react-router-dom";
import { DecadeContext } from "../../../../../contexts/decadeContext.context";

const SideNavItem = (props) => {

    const { decade } = props;
    // context: current Decade and Update Decade
    const { updateDecade } = useContext(DecadeContext);

    const handleClick = () => {
        updateDecade(decade);
    }

    return (
        <li className="cursor-pointer pl-5 py-1 my-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl" onClick={() => handleClick()}> {/*Onclick code here */}
            <Link className="">
                {decade}s
            </Link>
        </li>
    )
}

export default SideNavItem;