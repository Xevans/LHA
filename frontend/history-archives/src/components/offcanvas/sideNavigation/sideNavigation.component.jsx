import { PublisherContext } from "../../../contexts/publisher.context";
import { Fragment, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GPnewsSideNav from "../gpnews/sideNav/gpnewsSideNav.component";
import GPMagazineSideNav from "../gpMagazine/sideNav/sideNav.gpmagazine.component";
import GPCivicSideNav from "../gpcivic/sideNav/sideNav.gpcivic.component";
import GPHeritageSideNav from "../gpheritage/sideNav/sideNav.gpheritage.component";

const SideNavigation = () => {

    const { currentPublisher } = useContext(PublisherContext);

    // whenever currentPublisher changes, determine what component to render in the side nav
    // "" = home page side nav
    // "gpnews" = grosse pointe news side nav... 
    
    const renderSwitch = () => {
        switch (currentPublisher) {
            case 'gpnews':
                return <GPnewsSideNav />

            case 'gpmagazine':
                return <GPMagazineSideNav />

            case 'gpcivic':
                return <GPCivicSideNav />
        
            case 'gpheritage':
                return <GPHeritageSideNav />
        
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
                    <div>
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                            
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News Outlets
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to='/gpnews'>Grosse Pointe News</Link>
                                    <Link className="dropdown-item" to='/gpheritage'>Grosse Pointe Heritage</Link>
                                    <Link className="dropdown-item" to='/gpcivic'>Grosse Pointe Civic</Link>
                                </ul>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Magazine Outlets
                                </Link>
                                <ul className="dropdown-menu">
                                    <Link className="dropdown-item" to='/gpmagazine'>Grosse Pointe Magazine</Link>
                                    <Link className="dropdown-item" to='/'>Grosse Pointe Review</Link>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    {renderSwitch()}
                </div>
            </div>
        </Fragment>
    )
};

export default SideNavigation;