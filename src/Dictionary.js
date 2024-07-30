import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

    function Dictionary () {
        let [keyword, setkeyword] = useState("");

        function handleResponse(response) {
            console.log(response.data[0]);
    
        }
    

        function search(event) {
            event.preventDefault();
    
    
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
        </div>
    
}
export default Dictionary;