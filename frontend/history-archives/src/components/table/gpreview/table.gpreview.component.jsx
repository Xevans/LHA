import { useState, useEffect, useContext } from 'react';
import { YearContext } from '../../../contexts/yearContext.context';
import axios from 'axios';
import TableButton from '../../buttons/table_button/table_button.component';

const GPReviewTable = () => {

    const { currentYear, updateYear } = useContext(YearContext);
    const [newspapers, setNewspapers] = useState([]);

    //const [nextYear, setNextYear] = useState(currentYear + 1);
    //const [previousYear, setPreviousYear] = useState(currentYear - 1)

    useEffect(() => {
        try {

            async function getIssues() {
                try {
                    const response = await axios.get(`http://127.0.0.1:5555/gp_review/issues?publishYear=${currentYear}`)
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


    const handleClick = (year) => {
        updateYear(year);
    }

    const determineButtonRenderNext = () => {
        if (currentYear + 1 <= 1952) {
            if (currentYear === 1932) {
                return 1940;
            }
            return currentYear + 1;
        }
        else {
            return currentYear;
        }
    }

    const determineButtonRenderPrev = () => {
        if (currentYear - 1 >= 1930) {
            if (currentYear === 1940) {
                return 1932; // gap between 1932 and 1940
            }
            return currentYear - 1;
        }
        else {
            return currentYear;
        }
    }

    return (
        <div className="container table-container">
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

            <div className='container text-center table-navigator'>
                {/*Handle lowerbound: 1940 and upper bound: current Real time year */}
                <div className='row'>
                    <div className='col-auto me-auto' onClick={() => handleClick(determineButtonRenderPrev())}>
                        <TableButton destination={determineButtonRenderPrev()} />
                    </div>
                    <div className='col-auto' onClick={() => handleClick(determineButtonRenderNext())}>
                        <TableButton destination={determineButtonRenderNext()} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GPReviewTable;