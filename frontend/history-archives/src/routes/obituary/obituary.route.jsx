import { useContext, useEffect } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import ObituaryTable from "../../components/table/obituary/table.obituary.component";

const Obituary = () => {

    const { updatePublisher, currentPublisher } = useContext(PublisherContext);
    
        useEffect(() => {
            updatePublisher("obituary");
        }, [updatePublisher]);

    return (
        <>
            <ObituaryTable />
        </>
    )
}

export default Obituary;