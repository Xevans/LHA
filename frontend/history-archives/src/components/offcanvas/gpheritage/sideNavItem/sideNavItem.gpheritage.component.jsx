import { DecadeContext } from "../../../../contexts/decadeContext.context";
import { Link } from "react-router-dom";
import { useContext } from "react";


const SideNavItem = (props) => {

    const { decade } = props;

    const { updateDecade } = useContext(DecadeContext);


    return (
        <li className="nav-item" onClick={() => updateDecade((decade))}>
            <Link className="nav-link">
                {decade}s
            </Link>
        </li>
    )
}

export default SideNavItem;