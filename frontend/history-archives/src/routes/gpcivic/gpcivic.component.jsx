import { useContext, useEffect } from "react";
import Welcome from "../../components/welcome/welcome.component";
import { PublisherContext } from "../../contexts/publisher.context";
import { DecadeContext } from "../../contexts/decadeContext.context";
import TableGPCivic from "../../components/table/gpcivic/table.gpcivic.component";


const GPCivic = () => {

    const this_publisher = "gpcivic"
    const { updatePublisher, currentPublisher } = useContext(PublisherContext);
    const { updateDecade, currentDecade } = useContext(DecadeContext);
    // civic context

    useEffect(() => {
        updatePublisher(this_publisher);
    }, []);

    
    const determineRender = () => {
        if (currentDecade === 0) {
            return <Welcome />
        }
        else {
            return <TableGPCivic />
        }
    }

    return (
        <div>
            {determineRender()}
        </div>
    )
}

export default GPCivic;