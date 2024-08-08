import { useEffect, useState, useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import { NewspaperContext } from "../../contexts/gpnews.context";

import './gpnews.styles.scss';

const GPnews = () => {

    const test_data = [
        { 
            title: "2000-01-13",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-01-13.pdf",
            publishMonth: 1,
            publishYear: 2000,
            publishDay: 13
        },
        { 
            title: "2000-01-20",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-01-20.pdf",
            publishMonth: 1,
            publishYear: 2000,
            publishDay: 20
        },
        { 
            title: "2000-01-06",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-01-06.pdf",
            publishMonth: 1,
            publishYear: 2000,
            publishDay: 6
        },
        { 
            title: "2000-02-03",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-02-03.pdf",
            publishMonth: 2,
            publishYear: 2000,
            publishDay: 3
        },
        { 
            title: "2000-03-02",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-03-02.pdf",
            publishMonth: 3,
            publishYear: 2000,
            publishDay: 2
        },
        { 
            title: "2000-04-13",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-04-13.pdf",
            publishMonth: 4,
            publishYear: 2000,
            publishDay: 13
        },
        { 
            title: "2000-04-06",  
            fileURL: "http://digitize.gp.lib.mi.us/history/newspapers/grossePointeNews/year_ranges/2000s/2000/pdf/2000-04-06.pdf",
            publishMonth: 4,
            publishYear: 2000,
            publishDay: 6
        },
    ]

    const [newspapers, setNewspapers] = useState([]);
    const [january_issues, setJanuary] = useState([]);
    const [february_issues, setFebruary] = useState([]);
    const [march_issues, setMarch] = useState([]);
    const [april_issues, setApril] = useState([]);
    const [may_issues, setMay] = useState([]);
    const [june_issues, setJune] = useState([]);
    const [july_issues, setJuly] = useState([]);
    const [august_issues, setAugust] = useState([]);
    const [september_issues, setSeptember] = useState([]);
    const [october_issues, setOctober] = useState([]);
    const [november_issues, setNovember] = useState([]);
    const [december_issues, setDecember] = useState([]);



    const this_publisher = "gpnews";
    const { updatePublisher, currentPublisher } = useContext(PublisherContext);    


    const { currentYear } = useContext(NewspaperContext);


    const sortIssues = (issues) => {
        return issues.sort((a, b) => (a.publishDay > b.publishDay) ? 1 : -1); 
    } 

    useEffect(() => {
        const url_to_fetch = `http://127.0.0.1:5555/gp_news/issues?publishYear=${currentYear}`
        fetch(url_to_fetch)
        .then((response) => response.json())
        .then((issues) => setNewspapers(issues));

        updatePublisher(this_publisher);

        // filter newspapers by month field and return a new array out of each (each month has a list of issues from least to greatest by day)
        const january = test_data.filter( (issue) => {
            return issue.publishMonth === 1;
        });
        //january_issues.sort((a, b) => (a.publishDay > b.publishDay) ? 1 : -1);
        sortIssues(january);
        setJanuary(january);

        const february = test_data.filter( (issue) => {
            return issue.publishMonth === 2;
        });
        sortIssues(february);
        setFebruary(february)

        const march = test_data.filter( (issue) => {
            return issue.publishMonth === 3;
        });
        sortIssues(march);
        setMarch(march);

        const april = test_data.filter( (issue) => {
            return issue.publishMonth === 4;
        });
        sortIssues(april);
        setApril(april);

        const may = test_data.filter( (issue) => {
            return issue.publishMonth === 5;
        });
        sortIssues(may);
        setMay(may);

        const june = test_data.filter( (issue) => {
            return issue.publishMonth === 6;
        });
        sortIssues(june);
        setJune(june);

        const july = test_data.filter( (issue) => {
            return issue.publishMonth === 7;
        });
        sortIssues(july);
        setJuly(july);

        const august = test_data.filter( (issue) => {
            return issue.publishMonth === 8;
        });
        sortIssues(august);
        setAugust(august);

        const september = test_data.filter( (issue) => {
            return issue.publishMonth === 9;
        });
        sortIssues(september);
        setSeptember(september);

        const october = test_data.filter( (issue) => {
            return issue.publishMonth === 10;
        });
        sortIssues(october);
        setOctober(october);

        const november = test_data.filter( (issue) => {
            return issue.publishMonth === 11;
        });
        sortIssues(november);
        setNovember(november);

        const december = test_data.filter( (issue) => {
            return issue.publishMonth === 12;
        });
        sortIssues(december);
        setDecember(december);
        

    }, []);

    /*console.log(january_issues);
    console.log(february_issues);
    console.log(march_issues);
    console.log(april_issues);
    console.log(may_issues);
    console.log(june_issues);
    console.log(july_issues);
    console.log(august_issues);
    console.log(september_issues);
    console.log(october_issues);
    console.log(november_issues);
    console.log(december_issues);*/

    
    console.log(newspapers);
    console.log(currentPublisher);


    
    // render each row with the corresponding issues in order.

    return (
        <div className="table-container">
            {/* Build a table here to test, then make it into a reusable component. */}
            <table className="table">
                <tbody>
                    <tr>
                        <th>January</th>
                        {january_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>February</th>
                        {february_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>March</th>
                        {march_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>April</th>
                        {april_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>May</th>
                        {may_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>June</th>
                        {june_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>July</th>
                        {july_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>August</th>
                        {august_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>September</th>
                        {september_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>October</th>
                        {october_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>November</th>
                        {november_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                    <tr>
                        <th>December</th>
                        {december_issues.map((issue, key) => {
                            return (
                                <td key={key}> <a href={issue.fileURL} rel="noreferrer" target="_blank">{issue.title}</a> </td>
                            )
                        })}       
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default GPnews;