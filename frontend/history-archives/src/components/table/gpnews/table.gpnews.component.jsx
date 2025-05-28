import { useState, useEffect, useContext } from 'react';
import { YearContext } from '../../../contexts/yearContext.context';
import axios from 'axios'
import TableButton from '../../buttons/table_button/table_button.component';


const TableGPnews = () => {

    const { currentYear, updateYear } = useContext(YearContext);
    const [newspapers, setNewspapers] = useState([]);
    const [isloading, setIsLoading] = useState(false);

    //const [nextYear, setNextYear] = useState(currentYear + 1);
    //const [previousYear, setPreviousYear] = useState(currentYear - 1)

    useEffect(() => {
        try {
            setIsLoading(true);
            async function getIssues() {
                try {
                    const response = await axios.get(`${import.meta.env.VITE_APP_EXPRESS_SERVER}/gp_news/issues?publishYear=${currentYear}`)
                    const issues = response.data.data;
                    setNewspapers(issues);
                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            }

            getIssues();

        } catch (error) {
            setIsLoading(false);
            console.log(error);
        }
        setIsLoading(false);
            
    }, [currentYear]);


    const handleClick = (year) => {
        updateYear(year);
    }

    const determineButtonRenderNext = () => {
        const d = new Date();
        let real_time_current_year = d.getFullYear()
        if (currentYear + 1 < real_time_current_year + 1) {
            return currentYear + 1;
        }
        else {
            return currentYear;
        }
    }

    const determineButtonRenderPrev = () => {
        if (currentYear - 1 > 1937 - 1) {
            return currentYear - 1;
        }
        else {
            return currentYear;
        }
    }

    const loadingSwitch = () => {
        if (isloading) {
            return (
                <>
                    <div role="status">
                        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        <span className="sr-only">Loading...</span>
                    </div>
                </>
            );
        }
        else {

            return (
                <div className="relative overflow-x-auto mt-20 pb-10 mx-10 min-h-screen">
                    {/* Build a table here to test, then make it into a reusable component. */}
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            {//Render only iff there is something to render (i.e. if nothing pulled, dont render row)
                                newspapers.filter((item) => item.publishMonth === 1).length > 0 &&

                                <tr className='border-b dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                                <tr className=' border-b  dark:text-white dark:border-gray-500 border-gray-200'>
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

                    <div className=''>
                        {/*Handle lowerbound: 1940 and upper bound: current Real time year */}
                        <div className='flex flex-box'>
                            <div className='flex-1 ' >
                                <TableButton onClick={() => handleClick(determineButtonRenderPrev())} destination={determineButtonRenderPrev()} />
                            </div>
                            <div className='' >
                                <TableButton onClick={() => handleClick(determineButtonRenderNext())} destination={determineButtonRenderNext()} />
                            </div>
                        </div>
                    </div>
                </div>
            );

        }
    }

    return (
        
        <>
            {loadingSwitch()}
        </>
        
    );
}

export default TableGPnews;