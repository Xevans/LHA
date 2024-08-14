import { PublisherContext } from "../../contexts/publisher.context";
import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GPnewsSideNav from "./gpnews/gpnewsSideNav.component";

const SideNavigation = () => {

    const { currentPublisher } = useContext(PublisherContext);

    //console.log(currentPublisher);

    // whenever currentPublisher changes, determine what component to render in the side nav
    // "" = home page side nav
    // "gpnews" = grosse pointe news side nav... 
    const renderSwitch = () => {
        switch (currentPublisher) {
            case "gpnews":
                return ( 
                    <GPnewsSideNav />
                );
        
            default:
                break;
        }
    }

    return (
        <Fragment>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Local History Archives</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                
                <div className="offcanvas-body">
                    {renderSwitch()}
                </div>
            </div>
        </Fragment>
    )
};

export default SideNavigation;