import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import { GPMagazineContext } from "../../contexts/gpmagazine.context";
import Welcome from "../../components/welcome/welcome.component";
import TableGPMagazine from "../../components/table/gpmagazine/table.gpmagazine.component";

const GPMagazine = () => {
    
    const this_publisher = "gpmagazine";
    const { updatePublisher, currentPublisher } = useContext(PublisherContext);
    const { currentDecade } = useContext(GPMagazineContext);

    useEffect(() => {
        updatePublisher(this_publisher);
    }, []);


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