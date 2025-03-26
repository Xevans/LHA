import axios from "axios";
import { useContext } from "react";
import { ADMPublisherContext } from "../../context/publisher.context";
import {useInView} from "react-intersection-observer";
import { useEffect } from "react";


const DatabaseListItem = (props) => {

    const { currentPublisher } = useContext(ADMPublisherContext)

    const { issue, key } = props;

    const [ref, inView] = useInView();

    const style = {
        height: "50px",
        overflow: "hidden"
    };

    useEffect(() => {
        console.log(key)
    }, [])

    async function deleteIssue (issue_id) {
        await axios.delete(`${process.env.REACT_APP_ADMIN_BACKEND}/manage/${currentPublisher}/delete/${issue_id}`);
    }


    return (
        <div style={style} ref={ref}>
        {/*inView ? props : null*/}
        <tr key={key}>  
            <th> {issue.title} </th>
            <td> Year:{issue.publishYear} </td>
            <td> Month:{issue.publishMonth} </td>
            <td> Day:{issue.publishDay} </td>
            <td> Decade:{issue.publishDecade} </td>
            <td> ID:{issue._id} </td>
            <td>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${key}`}>
                    URL
                </button>
            </td>
            <td>
                <button type="button" className="btn btn-danger" onClick={() => deleteIssue(issue._id)}>
                    Delete
                </button>
            </td>

            <div className="modal fade" id={key} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">File URL</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body modal-text">
                            {issue.fileURL}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </tr>
        </div>
    )
}

export default DatabaseListItem;