import { useContext, useEffect } from "react";
import { DecadeContext } from "../../contexts/decadeContext.context";
import { PublisherContext } from "../../contexts/publisher.context";
import Welcome from "../../components/welcome/welcome.component";
import TableGPHeritage from "../../components/table/gpheritage/table.gpheritage.component";


const GPHeritage = () => {

    const this_publisher = "gpheritage";
    const { updatePublisher } = useContext(PublisherContext);
    const { currentDecade } = useContext(DecadeContext);

    useEffect(() => {
        updatePublisher(this_publisher);
    }, []);


    const determineRender = () => {
        if (currentDecade === 0) {
            return <Welcome />
        }
        else {
            return <TableGPHeritage />
        }
    }


    return (
        <div>
            {determineRender()}
        </div>
    )
}

export default GPHeritage;