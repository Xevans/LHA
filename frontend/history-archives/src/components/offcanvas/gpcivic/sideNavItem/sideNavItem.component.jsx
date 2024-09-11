import { useContext } from "react";
import { Link } from "react-router-dom";
import { DecadeContext } from "../../../../contexts/decadeContext.context";

const SideNavItem = (props) => {

    const { decade } = props;
    // context: current Decade and Update Decade
    const { updateDecade, currentDecade } = useContext(DecadeContext);

    const handleClick = () => {
        updateDecade(decade);
    }

    return (
        <li className="nav-item" onClick={() => handleClick()}> {/*Onclick code here */}
            <Link className="nav-link">
                {decade}s
            </Link>
        </li>
    )
}

export default SideNavItem;