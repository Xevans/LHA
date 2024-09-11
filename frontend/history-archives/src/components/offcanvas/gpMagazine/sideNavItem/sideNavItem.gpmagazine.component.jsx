import { useContext, useEffect } from "react";
import { DecadeContext } from "../../../../contexts/decadeContext.context";
import { Link } from "react-router-dom";


const SideNavItem = (props) => {

    const { decade } = props;

    const { currentDecade, updateDecade } = useContext(DecadeContext);

    const d = new Date();

    /*useEffect(() => {
        console.log(currentDecade)
    }, [currentDecade]);
    */

    return (
        <li className="nav-item" onClick={() => updateDecade((decade))}>
            <Link className="nav-link">
                {decade}s
            </Link>
        </li>
    )

}

export default SideNavItem;