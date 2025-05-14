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
                    const response = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_review/issues?publishYear=${currentYear}`)
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
            if (currentYear >= 1932 && currentYear < 1936) {
                return 1936;
            }
            return currentYear + 1;
        }
        else {
            return currentYear;
        }
    }

    const determineButtonRenderPrev = () => {
        if (currentYear - 1 >= 1930) {
            if (currentYear <= 1936 && currentYear > 1932) {
                return 1932; // gap between 1932 and 1940
            }
            return currentYear - 1;
        }
        else {
            return currentYear;
        }
    }


    const determineTableContentRender = () => {

        if (newspapers.length > 0) {
            return (
                <div className="relative overflow-x-auto mt-20 mb-10 mx-10">
                    {/* Build a table here to test, then make it into a reusable component. */}
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                                newspapers.filter((item) => item.publishMonth === 1).length > 0 &&
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        January
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        February
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        March
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        April
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        May
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        June
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        July
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        August
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        September
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        October
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        November
                                    </th>
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
        
                                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200'>
                                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        December
                                    </th>
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
        
                    <div>
                        {/*Handle lowerbound: 1940 and upper bound: current Real time year */}
                        <div className='flex flex-row'>
                            <div className='flex-1 hover:cursor-pointer' onClick={() => handleClick(determineButtonRenderPrev())}>
                                <TableButton destination={determineButtonRenderPrev()} />
                            </div>
                            <div className='hover:cursor-pointer' onClick={() => handleClick(determineButtonRenderNext())}>
                                <TableButton destination={determineButtonRenderNext()} />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className="welcome-home-body container">
                    <p>No issues for this year...</p>
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

    }

    return (
        <div>
            {determineTableContentRender()}
        </div>
    )
}

export default GPReviewTable;