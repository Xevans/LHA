import { useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";

import './welcome.component.scss'

const Welcome = () => {

    // test publisher name 
    const { publisherName } = useContext(PublisherContext);

    return (
        <div className="container mt-20 text-center">
            <h4>Welcome to The {`${publisherName}`} Archives</h4>
            <p>Here, you can browse for local news publications by year.<br /> Open the menu in the top-right corner by clicking the button with three lines.
            
            </p>

        </div>
    )
};

export default Welcome;