import { useContext, useEffect, useState } from "react";
import { Outlet} from "react-router-dom";
import SideNavigation from "../../components/offcanvas/sideNavigation/sideNavigation.component";
import NavbarTitle from "../../components/navbarTitle/navbarTitle.component";
import { PublisherContext } from "../../contexts/publisher.context";
import { YearContext } from "../../contexts/yearContext.context";
import { DecadeContext } from "../../contexts/decadeContext.context";


const Navigation = () => {

    const { currentPublisher } = useContext(PublisherContext);
    const { currentYear } = useContext(YearContext); 
    const { currentDecade } = useContext(DecadeContext);

    const [publisher_code, setPublisherCode] = useState("");
    const [title_year, setTitleYear] = useState("");
    const [title_decade, setTitleDecade] = useState("");

    useEffect(() => {
        setPublisherCode(currentPublisher);
        setTitleYear(currentYear);
        setTitleDecade(currentDecade);

    }, [currentPublisher, currentYear, currentDecade]);
    
    return(
        <>
            <nav className="top-0 left-0 w-full  max-w-screen px-4 py-2 mx-auto bg-white dark:bg-gray-800 shadow-md">
                <div className="flex flex-row">
                    <div className="flex-1">
                        <NavbarTitle publisher_code={publisher_code} title_year={title_year} title_decade={title_decade} />
                    </div>
            
                    <div>
                        <SideNavigation />
                    </div>
                    
                    
                </div>
            </nav>
            <Outlet /> {/*Tells react to render the nested routes */}
        </>
    );
}

export default Navigation;