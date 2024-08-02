import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";


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

                    
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Local History Archives</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" to='/'>Link</Link>
                                </li>

                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">Dropdown</Link>
                                    <ul>
                                        <li> <Link className="dropdown-item" to='/'>Action</Link> </li>
                                        <li> <Link className="dropdown-item" to='/'>Another action</Link> </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet /> {/*Tells react to render the nested routes */}
        </Fragment>
    );
}

export default Navigation;