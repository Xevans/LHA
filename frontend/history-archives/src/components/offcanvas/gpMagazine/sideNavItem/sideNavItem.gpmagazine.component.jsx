import { useContext, useEffect } from "react";
import { GPMagazineContext } from "../../../../contexts/gpmagazine.context";


const SideNavItem = (props) => {

    const { decade } = props;

    const { currentDecade, updateDecade } = useContext(GPMagazineContext);

    const d = new Date();

    /*useEffect(() => {
        console.log(currentDecade)
    }, [currentDecade]);
    */

    return (
        <li className="nav-item" onClick={() => updateDecade((decade))}>
            {decade}s
        </li>
    )

}

export default SideNavItem;