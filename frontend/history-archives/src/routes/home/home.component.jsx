import './home.styles.scss'
import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import Welcome from '../../components/welcome/welcome.component';
import Searchbar from '../../components/search/searchbar.component';



const Home = () => {

    const { updatePublisher, currentPublisher } = useContext(PublisherContext);

    useEffect(() => {
        updatePublisher("1");
    }, [updatePublisher]);

    console.log(currentPublisher);

    return (
        <div>
            <Welcome/>
            <Searchbar/>
        </div>
    );
}

export default Home;