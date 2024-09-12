import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SideNavigation from "../../components/offcanvas/sideNavigation/sideNavigation.component";
import NavbarTitle from "../../components/navbarTitle/navbarTitle.component";
import { PublisherContext } from "../../contexts/publisher.context";
import { YearContext } from "../../contexts/yearContext.context";


const Navigation = () => {

    const { currentPublisher } = useContext(PublisherContext);
    const { currentYear } = useContext(YearContext);

    const [publisher_code, setPublisherCode] = useState("");
    const [title_year, setTitleYear] = useState("");

    //console.log(currentPublisher); // got publisher, now not getting year
    //console.log(currentYear);

    useEffect(() => {
        setPublisherCode(currentPublisher);
        setTitleYear(currentYear);
    }, [currentPublisher, currentYear]);
    
    return(
        <Fragment>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavbarTitle publisher_code={publisher_code} title_year={title_year} />
            
                    <SideNavigation />
                    
                </div>
            </nav>
            <Outlet /> {/*Tells react to render the nested routes */}
        </Fragment>
    );
}

export default Navigation;