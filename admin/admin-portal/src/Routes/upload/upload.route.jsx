import { Fragment, useEffect, useState } from "react";
import GPNewsUploadForm from "../../components/forms/gpnews/news-upload-form.component";
import GPCivicUploadForm from "../../components/forms/gpcivic/civic-upload-form.component";
import GPMagazineUploadForm from "../../components/forms/gpmagazine/magazine-upload-form.component";
import './upload.styles.scss'
import GPHeritageUploadForm from "../../components/forms/gpheritage/heritage-upload-form.component";
import GPReviewUploadForm from "../../components/forms/gpreview/review-upload-form.component";
import { Link } from "react-router-dom";
import Obituary from "../../components/forms/obituary/obituary-form.component";
import DBTable from "../../components/data-table/database-table.component";

const Upload = () => {

    // display a different form and call the appropiate functionality depending on the chosen issue to upload

    const [uploadType, setUploadType] = useState("news");


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

            case "obituary":
                return (
                    <Obituary />
                );
        
            default:
                break;
        }
    }

    const handleClick = (new_type) => {
        setUploadType(new_type);
    }


    return (
        
        <>
            <div className="top-0 left-0 w-full  max-w-screen px-4 py-2 mx-auto bg-white shadow-md">
                <div className="">
                    <h2 className="font-semibold text-xl ">Local History Archives | Administrative UI</h2>
                </div>
            </div>
            <div className="bg-white">
                <div className="container mx-auto">

                    <div className="text-center mt-10">
                        <h2 className="text-3xl font-semibold"> Publisher Upload</h2>
                        <span className="font-semibold">Enter details below</span>
                    </div>

                    <div className="p-10">
                        
                        <div className="">
                            <div className="row flex w-full">

                                <div className="rounded-md w-full rounded-r-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("news")}>
                                        G.P. News
                                    </Link>
                                </div>

                                <div className="rounded-none w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("heritage")}>
                                        G.P. Heritage
                                    </Link>
                                </div>

                                <div className="rounded-none w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("civic")}>
                                        G.P. Civic
                                    </Link>
                                </div>

                                <div className="rounded-none w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("magazine")}>
                                        G.P. Magazine
                                    </Link>
                                </div>

                                <div className="rounded-none w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("review")}>
                                        G.P. Review
                                    </Link>
                                </div>

                                <div className="rounded-md w-full rounded-l-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <Link onClick={() => handleClick("obituary")}>
                                        Obituary
                                    </Link>
                                </div>

                            </div>

                        </div>

                        <div className="container">
                            <div className="">
                                <div className="">

                                    <div className="" >
                                        {formSwitch()}
                                    </div>

                                    <div className="">
                                        
                                    </div>

                                </div>

                                <div className="max-w-full">
                                    <DBTable current_route={uploadType} />
                                </div>
                            </div>
                        </div>

                    </div>

                    
                </div>
            </div>

            
        </>
    )
}

export default Upload;