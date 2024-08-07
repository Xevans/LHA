import { PublisherContext, PublisherProvider } from "../../contexts/publisher.context";
import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";

const SideNavigation = () => {

    const { currentPublisher } = useContext(PublisherContext);

    //console.log(currentPublisher);

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
        </Fragment>
    )
};

export default SideNavigation;