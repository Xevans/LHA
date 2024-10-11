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
                    const response = await axios.get(`${process.env.REACT_APP_EXPRESS_SERVER}/gp_civic/issues?publishDecade=${currentDecade}`)
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
        <div className="container table-container">
            <table className="table">
                <tbody>
                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishYear === currentDecade).length > 0 &&

                        <tr>
                            <th>{currentDecade}</th>
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

                        <tr>
                            <th>{currentDecade + 1}</th>
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

                        <tr>
                            <th>{currentDecade + 2}</th>
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

                        <tr>
                            <th>{currentDecade + 3}</th>
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

                        <tr>
                            <th>{currentDecade + 4}</th>
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

                        <tr>
                            <th>{currentDecade + 5}</th>
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

                        <tr>
                            <th>{currentDecade + 6}</th>
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

                        <tr>
                            <th>{currentDecade + 7}</th>
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

                        <tr>
                            <th>{currentDecade + 8}</th>
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

                        <tr>
                            <th>{currentDecade + 9}</th>
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