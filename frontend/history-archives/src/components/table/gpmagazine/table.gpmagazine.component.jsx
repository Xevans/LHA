import { useContext, useEffect, useState } from "react";
import { DecadeContext } from "../../../contexts/decadeContext.context";
import axios from "axios";

const TableGPMagazine = () => {

    // fetch the issues on mount or when the current decade changes.
    // need to know the fields for a magazine object
    // how to render a May-Jun issue?

    const { currentDecade } = useContext(DecadeContext);
    const [magazines, setMagazines] = useState([]);

    useEffect(() => {
        try {

            async function getIssues() {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_magazine/issues?publishDecade=${currentDecade}`)
                    const issues = response.data.data;
                    setMagazines(issues);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            getIssues();

        } catch (error) {
            console.log(error);
        }
            
    }, [currentDecade]);


    return (
        <div className="relative overflow-x-auto mt-10 pb-10 md:mx-10 min-h-screen">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="">
                        <tr>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            <th scope="col" className="px-10 py-3">
                                
                            </th>
                            
                        </tr>
                    </thead>
                <tbody>
                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 1).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 1}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 1)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 2).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 2}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 2)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 3).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 3}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 3)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 4).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 4}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 4)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 5).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 5}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 5)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 6).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 6}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 6)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 7).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 7}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 7)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 8).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 8}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 8)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }

                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        magazines.filter((item) => item.publishYear === currentDecade + 9).length > 0 &&

                        <tr className=' border-b dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 9}</th>
                            {magazines.filter((item) => item.publishYear === currentDecade + 9)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }
                </tbody>
            </table>

        </div>
    )
}

export default TableGPMagazine;