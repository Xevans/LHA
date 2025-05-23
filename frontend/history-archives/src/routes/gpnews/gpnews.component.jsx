import { useEffect, useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import { YearContext } from "../../contexts/yearContext.context";
import TableGPnews from "../../components/table/gpnews/table.gpnews.component";
import Welcome from "../../components/welcome/welcome.component";


const GPnews = () => {

    const this_publisher = "gpnews";
    const { updatePublisher } = useContext(PublisherContext);    
    const { currentYear } = useContext(YearContext); // need this to determine if home or table should render

    useEffect(() => {
        updatePublisher(this_publisher);
        
    }, [updatePublisher]);

    //console.log(currentPublisher);


    const determineRender = () => {
        if (currentYear === 0) {
            return <Welcome />
        }
        else {
            return <TableGPnews />
        }
    } 
    

    /*console.log(january_issues);
    console.log(february_issues);
    console.log(march_issues);
    console.log(april_issues);
    console.log(may_issues);
    console.log(june_issues);
    console.log(july_issues);
    console.log(august_issues);
    console.log(september_issues);
    console.log(october_issues);
    console.log(november_issues);
    console.log(december_issues);*/

    
    //console.log(newspapers);
    //console.log(currentPublisher);


    
    // render each row with the corresponding issues in order.

    return (
        <div>
            {determineRender()}
        </div>
        
    )
}

export default GPnews;