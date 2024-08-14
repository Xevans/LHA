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
                    <tr>
                        <th>January</th>
                        {newspapers.filter((item) => item.publishMonth === 1)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>February</th>
                        {newspapers.filter((item) => item.publishMonth === 2)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}      
                    </tr>
                    <tr>
                        <th>March</th>
                        {newspapers.filter((item) => item.publishMonth === 3)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}         
                    </tr>
                    <tr>
                        <th>April</th>
                        {newspapers.filter((item) => item.publishMonth === 4)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}     
                    </tr>
                    <tr>
                        <th>May</th>
                        {newspapers.filter((item) => item.publishMonth === 5)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>June</th>
                        {newspapers.filter((item) => item.publishMonth === 6)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>July</th>
                        {newspapers.filter((item) => item.publishMonth === 7)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>August</th>
                        {newspapers.filter((item) => item.publishMonth === 8)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>September</th>
                        {newspapers.filter((item) => item.publishMonth === 9)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>October</th>
                        {newspapers.filter((item) => item.publishMonth === 10)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>November</th>
                        {newspapers.filter((item) => item.publishMonth === 11)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                    <tr>
                        <th>December</th>
                        {newspapers.filter((item) => item.publishMonth === 12)
                        .map( (issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}          
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default TableGPnews;