import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import { DecadeContext } from "../../contexts/decadeContext.context";
import Welcome from "../../components/welcome/welcome.component";
import TableGPMagazine from "../../components/table/gpmagazine/table.gpmagazine.component";

const GPMagazine = () => {
    
    const this_publisher = "gpmagazine";
    const { updatePublisher } = useContext(PublisherContext);
    const { currentDecade } = useContext(DecadeContext);

    useEffect(() => {
        updatePublisher(this_publisher);
    }, [updatePublisher]);


    const determineRender = () => {
        if (currentDecade === 0) {
            return <Welcome />
        }
        else {
            return <TableGPMagazine />
        }
    }
    

    return (
        <div>
            {determineRender()}
        </div>



    )



}

export default GPMagazine;