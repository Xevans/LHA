import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import Welcome from '../../components/welcome/welcome.component';



const Home = () => {

    const { updatePublisher, currentPublisher } = useContext(PublisherContext);

    useEffect(() => {
        updatePublisher("1");
    }, [updatePublisher]);


    return (
        <Welcome/>
    );
}

export default Home;