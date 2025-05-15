import { useContext } from "react";
import { DecadeContext } from "../../../../contexts/decadeContext.context";
import { Link } from "react-router-dom";


const SideNavItem = (props) => {

    const { decade } = props;

    const { updateDecade } = useContext(DecadeContext);

    return (
        <div>
            <li className="pl-5 py-1 my-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-2xl" onClick={() => updateDecade((decade))}>
                <Link className="">
                    {decade}s
                </Link>
            </li>
        </div>
    )

}

export default SideNavItem;