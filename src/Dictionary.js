import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

    function Dictionary () {
        let [keyword, setkeyword] = useState("");
        let [results, setResults] = useState({});

        function handleResponse(response) {
            console.log(response.data[0]);
            setResults(response.data[0]);
    
        }
    

        function search(event) {
            event.preventDefault();
    
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse)
        }

   
    function handlekeywordChange(event) {

        setkeyword(event.target.value);
    }
        
    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handlekeywordChange}/>
        </form>
        <Results results={results} />
        </div>
    
}
export default Dictionary;