import axios from "axios";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { ADMPublisherContext } from "../../context/publisher.context";

import "../database-list/database-list.scss"

function DatabaseList() {

    /* fetch data and render to table.
       Delete icon next to each
       queue up deletions
       add undo button to remove from queue
       add submit button to iteratively proccess each request followed by an auto refresh
       add a refresh button to fetch again


       Modify backend route to provide the object ID in the payload
       Create a backend route for deletion that accepts an object id and deletes the record.

       Create a function to delete an issue that accepts the issue's object id

       Instead of fetching new data, just update the map data by removing the deleted element.

       Lastly, try to apply virtual scroll to avoid scroll lag.
    */


    const [newspapers, setNewspapers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);



    const { currentPublisher } = useContext(ADMPublisherContext);



    

    useEffect(() => {

        async function getIssues() {
            setIsLoading(true);

            try {
                const response = await axios.get(`${process.env.REACT_APP_ADMIN_BACKEND}/${currentPublisher}`);
                const issues = response.data.data;
                setNewspapers(issues);
            } catch (e) {
                console.log(e);
            }
        }

        if (currentPublisher !== "") {
            
            getIssues();
            setIsLoading(false);
        }

        

    }, [currentPublisher, newspapers, isLoading])


    async function deleteIssue (issue_id) {
        await axios.delete(`${process.env.REACT_APP_ADMIN_BACKEND}/manage/${currentPublisher}/delete/${issue_id}`);
        const arr = newspapers.filter(item => item._id !== issue_id);
        setNewspapers(arr);
    }


    function renderSwitch() {
        if (isLoading) {
            return (
                <div class="spinner-border text-primary" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            )
        }
        else {
            return (
                
                <div className="container table-container db-list">
                    <div className="table">
                        <tbody>
                            
                            {
                               isLoading ?(
                                <div class="spinner-border text-primary" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                               ) 
                               
                               :
 
                                newspapers.map((issue, key) => { 
                                    // could show file url in modal on button press (its really long)
                                    return(
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
                                    )
                                })
                            }
                            
                        </tbody>
                    </div>
                </div>
            );
        }
    }


    return(
        <div className="">
            {renderSwitch()}
        </div>
    );
}

export default DatabaseList;