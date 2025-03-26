import { Fragment, useEffect, useState } from "react";
import GPNewsUploadForm from "../../components/gpnews/news-upload-form.component";
import GPCivicUploadForm from "../../components/gpcivic/civic-upload-form.component";
import GPMagazineUploadForm from "../../components/gpmagazine/magazine-upload-form.component";
import './upload.styles.scss'
import GPHeritageUploadForm from "../../components/gpheritage/heritage-upload-form.component";
import GPReviewUploadForm from "../../components/gpreview/review-upload-form.component";
import { Link } from "react-router-dom";
import DatabaseList from "../../components/database-list/database-list";

const Upload = () => {

    // display a different form and call the appropiate functionality depending on the chosen issue to upload

    const [uploadType, setUploadType] = useState("news")


    useEffect(() => {
    }, [uploadType]); 

    const formSwitch = () => {
        switch (uploadType) {

            case "news":
                return (
                    <GPNewsUploadForm />
                );
                

            case "magazine":
                return (
                    <GPMagazineUploadForm />
                );
                

            case "heritage":
                return (
                    <GPHeritageUploadForm />
                );
                
            case "civic":
                return (
                    <GPCivicUploadForm />
                );
                

            case "review":
                return (
                    <GPReviewUploadForm />
                );
        
            default:
                break;
        }
    }

    const handleClick = (new_type) => {
        setUploadType(new_type);
    }

    const checkCurrent = (code) => {
        if (uploadType === code) {
            return true;
        }

        return false;
    }

    /*Radios before switch */
    return (
        
        <Fragment>
            <div className="container text-center">
                <div className="row align-items-start main-cols">

                    <div className="col-9" >
                        {formSwitch()}
                    </div>

                    <div className="col-3">
                        <div class="list-group form-selection">

                            <Link className="list-group-item list-group-item-action" onClick={() => handleClick("news")} aria-current={checkCurrent("news")}>
                                Grosse Pointe News
                            </Link>

                            <Link className="list-group-item list-group-item-action" onClick={() => handleClick("heritage")} aria-current={checkCurrent("heritage")}>
                                Grosse Pointe Heritage
                            </Link>

                            <Link className="list-group-item list-group-item-action" onClick={() => handleClick("civic")} aria-current={checkCurrent("civic")}>
                                Grosse Pointe Civic
                            </Link>

                            <Link className="list-group-item list-group-item-action" onClick={() => handleClick("magazine")} aria-current={checkCurrent("magazine")}>
                                Grosse Pointe Magazine
                            </Link>

                            <Link className="list-group-item list-group-item-action" onClick={() => handleClick("review")} aria-current={checkCurrent("review")}>
                                Grosse Pointe Review
                            </Link>
                        </div>
                        
                    </div>

                </div>


                <DatabaseList />

                
            </div>


            
        </Fragment>
    )
}

export default Upload;