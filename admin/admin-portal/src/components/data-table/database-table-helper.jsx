
// accepts a string representing the current outlet
// returns a string representing the database collection id
export function determineCollection(current_route) {
    switch (current_route) {
        case "news":
            return "gp_news"
        case "magazine":
            return "gp_magazine" 
        case "heritage":
            return "gp_heritage"
        case "civic":
            return "gp_civic"
        case "review":
            return "gp_review"
        default:
            return current_route

    }
}

// accepts a string representing the current outlet
// returns a table header for the appropriate outlet
export function determineTableHeader(current_route) {
    switch (current_route) {
        case "news":
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-12 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span>Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>
            );
            break;
        
        case "magazine":
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Decade
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span className="">Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>
            );
            break;

        case "heritage":
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Decade
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span className="">Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>
            );
            break;
        
        case "civic":
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Decade
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span className="">Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>
            );
            break;

        case "review":
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Title
                    </th>
                    <th scope="col" className="px-6 py-3">
                        URL
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span className="">Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>
            );
            break;
        
        case "obituary":
            
            return (
                <>
                    <th scope="col" className="px-6 py-3">
                        #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        First
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Middle
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Last
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Date of Death
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Publisher
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Page #
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Print Date
                    </th>
                    <th scope="col" className="px-10 py-3">
                        <span className="">Copy</span>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <span className="sr-only">Delete</span>
                    </th>
                </>

            );

            break;
                
    
        default:
            return;
            break;
    }
}
