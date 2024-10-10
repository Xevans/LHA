import { useEffect, useContext } from "react";
import { YearContext } from "../../contexts/yearContext.context";
import { PublisherContext } from "../../contexts/publisher.context";

import Welcome from "../../components/welcome/welcome.component";
import GPReviewTable from "../../components/table/gpreview/table.gpreview.component";


const GPreview = () => {

    const this_publisher = "gpreview";
    const { updatePublisher } = useContext(PublisherContext);    
    const { currentYear } = useContext(YearContext); // need this to determine if home or table should render

    useEffect(() => {
        updatePublisher(this_publisher);
        
    }, [updatePublisher]);


    const determineRender = () => {
        if (currentYear === 0) {
            return <Welcome />
        }
        else {
            return <GPReviewTable />
        }
    }


    return (
        <div>
            {determineRender()}
        </div>
    )
}

export default GPreview;