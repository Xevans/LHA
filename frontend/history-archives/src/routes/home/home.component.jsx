import './home.styles.scss'
import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import Welcome from '../../components/welcome/welcome.component';



const Home = () => {

    const { updatePublisher, currentPublisher } = useContext(PublisherContext);

    useEffect(() => {
        updatePublisher("1");
    }, []);

    console.log(currentPublisher);

    return (
        <Welcome/>
    );
}

export default Home;