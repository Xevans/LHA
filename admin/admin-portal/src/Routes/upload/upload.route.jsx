import { Fragment, useEffect, useState } from "react";
import GPNewsUploadForm from "../../components/forms/gpnews/news-upload-form.component";
import GPCivicUploadForm from "../../components/forms/gpcivic/civic-upload-form.component";
import GPMagazineUploadForm from "../../components/forms/gpmagazine/magazine-upload-form.component";
import './upload.styles.scss'
import GPHeritageUploadForm from "../../components/forms/gpheritage/heritage-upload-form.component";
import GPReviewUploadForm from "../../components/forms/gpreview/review-upload-form.component";
import Obituary from "../../components/forms/obituary/obituary-form.component";
import DBTable from "../../components/data-table/database-table.component";
import Toast from "../../components/toast/toast.component";

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
                        <h2 className="text-3xl font-semibold"> LHA: Database Manager</h2>
                        <span className="font-semibold">Select a route  </span>
                    </div>

                    <div className="p-10">
                        
                        <div className="">
                            <div className="row flex w-full">

                                <div onClick={() => handleClick("news")} className="rounded-md cursor-pointer w-full rounded-r-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        G.P. News
                                    </div>
                                </div>

                                <div onClick={() => handleClick("heritage")} className="rounded-none cursor-pointer w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        G.P. Heritage
                                    </div>
                                </div>

                                <div onClick={() => handleClick("civic")} className="rounded-none cursor-pointer w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        G.P. Civic
                                    </div>
                                </div>

                                <div onClick={() => handleClick("magazine")} className="rounded-none cursor-pointer w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        G.P. Magazine
                                    </div>
                                </div>

                                <div onClick={() => handleClick("review")} className="rounded-none cursor-pointer w-full bg-slate-800 py-2 px-4 border-l border-r border-slate-700 text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        G.P. Review
                                    </div>
                                </div>

                                <div onClick={() => handleClick("obituary")} className="rounded-md cursor-pointer w-full rounded-l-none bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                                    <div>
                                        Obituary
                                    </div>
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

                <div className="fixed bottom-0 w-screen">
                    <Toast />
                </div>

            </div>

            
        </>
    )
}

export default Upload;