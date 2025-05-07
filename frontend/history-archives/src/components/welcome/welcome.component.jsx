import { useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";

import './welcome.component.scss'

const Welcome = () => {

    // test publisher name 
    const { publisherName } = useContext(PublisherContext);

    return (
        <div className="mt-40 text-center w-full">
            <div className="">
                <h4>Welcome to The {`${publisherName}`} Archives</h4>
                <p>Here, you can browse for local news publications by year.<br /> 
                    Open the menu in the top-right corner by clicking the button with three lines.
                </p>
            </div>
        </div>
    )
};

export default Welcome;