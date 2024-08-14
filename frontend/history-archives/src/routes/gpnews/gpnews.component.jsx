import { useEffect, useState, useContext } from "react";
import { PublisherContext } from "../../contexts/publisher.context";
import { NewspaperContext } from "../../contexts/gpnews.context";
import TableGPnews from "../../components/table/gpnews/table.gpnews.component";
import Welcome from "../../components/welcome/welcome.component";

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

    



    const this_publisher = "gpnews";
    const { updatePublisher } = useContext(PublisherContext);    
    const { currentYear } = useContext(NewspaperContext); // need this to determine if home or table should render

    useEffect(() => {
        updatePublisher(this_publisher);
    }, []);


    const determineRender = () => {
        if (currentYear === 0) {
            return <Welcome />
        }
        else {
            return <TableGPnews />
        }
    } 
    

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

    
    //console.log(newspapers);
    //console.log(currentPublisher);


    
    // render each row with the corresponding issues in order.

    return (
        <div>
            {determineRender()}
        </div>
        
    )
}

export default GPnews;