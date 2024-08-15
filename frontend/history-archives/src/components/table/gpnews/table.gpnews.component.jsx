import { useState, useEffect, useContext } from 'react';
import { NewspaperContext } from '../../../contexts/gpnews.context';
import './table.gpnews.styles.scss'
import axios from 'axios'


const TableGPnews = () => {

    const { currentYear } = useContext(NewspaperContext);
    const [newspapers, setNewspapers] = useState([]);

    useEffect(() => {
        try {

            async function getIssues() {
                try {
                    const response = await axios.get(`http://127.0.0.1:5555/gp_news/issues?publishYear=${currentYear}`)
                    console.log('test');
                    console.log(response);
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
            
    }, [currentYear]);

    return (
        <div className="table-container">
            {/* Build a table here to test, then make it into a reusable component. */}
            <table className="table">
                <tbody>
                    {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                        newspapers.filter((item) => item.publishMonth === 1).length > 0 &&

                        <tr>
                            <th>January</th>
                            {newspapers.filter((item) => item.publishMonth === 1)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}       
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 2).length > 0 &&

                        <tr>
                            <th>February</th>
                            {newspapers.filter((item) => item.publishMonth === 2)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}      
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 3).length > 0 &&

                        <tr>
                            <th>March</th>
                            {newspapers.filter((item) => item.publishMonth === 3)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}         
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 4).length > 0 &&

                        <tr>
                            <th>April</th>
                            {newspapers.filter((item) => item.publishMonth === 4)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}     
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 5).length > 0 &&

                        <tr>
                            <th>May</th>
                            {newspapers.filter((item) => item.publishMonth === 5)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 6).length > 0 &&

                        <tr>
                            <th>June</th>
                            {newspapers.filter((item) => item.publishMonth === 6)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 7).length > 0 &&

                        <tr>
                            <th>July</th>
                            {newspapers.filter((item) => item.publishMonth === 7)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 8).length > 0 &&

                        <tr>
                            <th>August</th>
                            {newspapers.filter((item) => item.publishMonth === 8)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }
                   
                    {
                        newspapers.filter((item) => item.publishMonth === 9).length > 0 &&

                        <tr>
                            <th>September</th>
                            {newspapers.filter((item) => item.publishMonth === 9)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 10).length > 0 &&

                        <tr>
                            <th>October</th>
                            {newspapers.filter((item) => item.publishMonth === 10)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 11).length > 0 &&

                        <tr>
                            <th>November</th>
                            {newspapers.filter((item) => item.publishMonth === 11)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
                            .map( (issue, key) => {
                                return (
                                    <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                                )
                            })}          
                        </tr>
                    }

                    {
                        newspapers.filter((item) => item.publishMonth === 12).length > 0 &&

                        <tr>
                            <th>December</th>
                            {newspapers.filter((item) => item.publishMonth === 12)
                            .sort((a, b) => a.publishDay > b.publishDay ? 1 : -1)
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
    );
}

export default TableGPnews;