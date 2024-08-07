import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import SideNavigation from "../../components/offcanvas/sideNavigation.component";


const Navigation = () => {
    
    return(
        <Fragment>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/'>Local History Archives</Link>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            News Outlets
                        </Link>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to='/gpnews'>Grosse Pointe News</Link>
                            <Link className="dropdown-item" to='/'>Grosse Pointe Heritage</Link>
                            <Link className="dropdown-item" to='/'>Grosse Pointe Civic</Link>
                        </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Magazine Outlets
                        </Link>
                        <ul className="dropdown-menu">
                            <Link className="dropdown-item" to='/'>Grosse Pointe Magazine</Link>
                            <Link className="dropdown-item" to='/'>Grosse Pointe Review</Link>
                        </ul>
                    </li>

                    <SideNavigation />
                    
                    
                </div>
            </nav>
            <Outlet /> {/*Tells react to render the nested routes */}
        </Fragment>
    );
}

export default Navigation;