import { useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";


const Welcome = () => {

    // test publisher name 
    const { publisherName } = useContext(PublisherContext);

    {/*{`${publisherName}`} */}
    return (
        <div className="mt-40 text-center w-full dark:text-white min-h-screen ">
            <div className="py-20 max-w-3xl mx-auto rounded-2xl">
                <div className="border-b mx-20 dark:border-gray-500">
                    <div>
                        <img src="/favicon.png" width={150} height={150} className="mx-auto pb-2"/>
                    </div>
                    <h4 className="text-xl font-medium pb-2">Welcome to Grosse Pointe Public Library: Local History Archives.</h4>
                </div>
                
                <h2 className="text-lg pb-2 pt-2">Currently browsing: <b>{`${publisherName.length > 0 ? publisherName : 'Home'}`}</b></h2>
                <p>Here, you can lookup and browse local news publications and obituaries.<br /> </p>
                <ul className="list-none">
                    <li>Open the menu in the top-right corner by clicking the button with three lines.</li>
                    <li>Select your a publisher then the appropriate date you would like to browse.</li>
                </ul>
            </div>
        </div>
    )
};

export default Welcome;