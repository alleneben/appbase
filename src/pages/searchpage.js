import React, { useState } from 'react';

import { ResultsTable } from '../components'



const SearchPage = () => {
    const [query, setquery] = useState('');
    const [results, setresults] = useState([])

    const handlequerychange = (query) => {
        console.log(query);
        
        setquery(query)
        setresults([query]) 
    }
    return (
        <div>
            <h3>Class Based Search</h3>
            <form>
                <label>Search</label>
                <input type="text" onChange={({target:{value}}) => handlequerychange(value)}/>
            </form>
            <ResultsTable results={results}/>
        </div>
    )
}


export default SearchPage;