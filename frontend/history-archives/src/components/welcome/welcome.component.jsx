import { useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";

import './welcome.component.scss'

const Welcome = () => {

    // test publisher name 
    const { publisherName } = useContext(PublisherContext);

    return (
        <div className="welcome-home-body container text-center bg-light p-3 rounded-2">
            <h4>Welcome to {publisherName}</h4>
            <p>Here, you can browse for publications by year.<br /> Open the menu in the top-right corner or click 'select decade' below.
            
            </p>

        </div>
    )
};

export default Welcome;