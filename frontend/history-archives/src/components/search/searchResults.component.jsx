
const SearchResults = (props) => {

    const { results } = props

    //const [filterPublisher, setFilterPublisher] = useState(0);

    /*const handleSelectPublisher = (publisher) => {
        if (publisher === "Grosse Pointe News") {
            setFilterPublisher(1)
        }
        else if (publisher === "Grosse Pointe Magazine") {
            setFilterPublisher(2)
        }
    }*/

    const determinePublisher = (tags) => {
        if (tags.length !== 1) {
            return "";
        }
        
        let this_tag = tags[0]

        switch (this_tag) {
            case 1:
                return "Grosse Pointe News";
            
            case 2:
                return "Grosse Pointe Magazine";
        
            default:
                return "other"
        }

    }



    const pdf_view_url = "http://localhost:8000/api/documents"

    return (
        <div>
            
            <div className="max-w-5xl mx-auto mt-10">
                <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 place-content-center gap-2">
                    {results.map( (obj, key) => {
                        return (
                            
                            <div key={key} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                                <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{obj.title}</h4>
                                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-700">Match Score: {(obj.__search_hit__.score).toPrecision(3)}</h5>
                                <h6 className="mb-2 text-lg font-bold tracking-tight text-gray-700" >{determinePublisher(obj.tags)}</h6>
                                
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-500">{(obj.__search_hit__.highlights).replace(/<\/?span.*?>/g, '')}...</p>
                                
                                <a 
                                href={`${pdf_view_url}/${obj.id}/preview/`} 
                                rel="noreferrer" target="_blank" 
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    View PDF
                                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                                    </svg>
                                </a>

                            </div>

                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default SearchResults;