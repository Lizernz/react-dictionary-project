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
    
    
    let apiUrl = `https://api.shecodes.io/dictionary/v1/word=${keyword}`;
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