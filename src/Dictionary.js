import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

    function Dictionary (props) {
        let [keyword, setkeyword] = useState(props.defaultkeyword);
        let [results, setResults] = useState(null);
        let [loaded, setLoaded] = useState(false);
        let [photos, setPhotos] = useState(null);

        function handleDictionResponse(response) {
            setResults(response.data[0]);
        }
        function handleImgResponse(response) {
            console.log(response.data.photos);
            setPhotos(response.data.photos);
        }

        function search () {
    // documentation: https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionResponse)
        

    let imgApiKey = "1de043300tfb174cf1a30ef403a9aobc";
    let imgApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imgApiKey}`;
    let headers = {"Authorization" : `Bearer ${imgApiKey}`};

    axios.get(imgApiUrl, { headers: headers}).then(handleImgResponse);
        }

   function handleSubmit (event) {
    event.preventDefault();
    search();
   }
    function handlekeywordChange(event) {
        setkeyword(event.target.value);   
    }
    function load() {
        setLoaded(true);
        search();
    }
      
    if (loaded) {
    return(
    <div className="Dictionary">
        <section>
            <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handlekeywordChange}
            defaultvalue={props.defaultkeyword} />
        </form>
        <div className="hint">
           Suggested words: sunset, days, food, animals, countries...
        </div>
        </section>
       
        <Results results={results} />
        <Photos photos={photos} />
        </div>
    );
    } else {
        load();
        return "Loading";
    }
}
export default Dictionary;