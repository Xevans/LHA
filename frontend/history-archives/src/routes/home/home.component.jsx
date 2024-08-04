import { Outlet } from "react-router-dom";
import './home.styles.scss'

const Home = () => {

    console.log("Home page.");
    return (
        <div className="home-body container text-center bg-light p-3 rounded-2">
            <h4>Local History Archives</h4>
            <p>Here, you can browse for publications by year.<br /> Open the menu in the top-right corner or click 'select decade' below.
            
            </p>

        </div>


    );
}

export default Home;