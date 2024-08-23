import { Fragment, useContext, useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import SideNavigation from "../../components/offcanvas/sideNavigation.component";
import NavbarTitle from "../../components/navbarTitle/navbarTitle.component";
import { PublisherContext } from "../../contexts/publisher.context";
import { NewspaperContext } from "../../contexts/gpnews.context";


const Navigation = () => {

    const { currentPublisher } = useContext(PublisherContext);
    const { currentYear } = useContext(NewspaperContext);

    const [publisher_code, setPublisherCode] = useState("");
    const [title_year, setTitleYear] = useState("");

    console.log(currentPublisher); // got publisher, now not getting year
    console.log(currentYear);

    useEffect(() => {
        setPublisherCode(currentPublisher);
        setTitleYear(currentYear);
    }, [currentPublisher, currentYear]);
    
    return(
        <Fragment>
            <nav className="navbar bg-body-tertiary fixed-top">
                <div className="container-fluid">
                    <NavbarTitle publisher_code={publisher_code} title_year={title_year} />
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