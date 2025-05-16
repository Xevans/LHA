import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { DecadeContext } from "../../../contexts/decadeContext.context";


const TableGPCivic = () => {

    const { currentDecade } = useContext(DecadeContext);
    const [newspapers, setNewspapers] = useState([]);

    useEffect(() => {
        try {
            async function getIssues() {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_civic/issues?publishDecade=${currentDecade}`)
                    const issues = response.data.data;
                    setNewspapers(issues);
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
        <div className="relative overflow-x-auto mt-20 pb-10 mx-10 min-h-screen">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <tbody>
                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 1).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 1}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 1)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 2).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 2}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 2)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 3).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 3}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 3)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 4).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 4}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 4)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 5).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 5}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 5)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 6).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 6}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 6)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 7).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 7}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 7)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }


                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 8).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 8}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 8)
                            .sort((a, b) => a.publishMonth > b.publishMonth ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }

                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade + 9).length > 0 &&

                        <tr className='bg-white border-b dark:bg-slate-700 dark:text-white dark:border-gray-500 border-gray-200'>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {currentDecade + 9}
                            </th>
                            {newspapers.filter((item) => item.publishYear === currentDecade + 9)
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

export default TableGPCivic;