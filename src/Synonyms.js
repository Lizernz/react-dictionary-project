import React from "react";
import "./Synonyms.css";

function Synonyms(props) {
    if (props.synonyms) {

    return (
        <ul className="Synonms">
       { props.synonyms.map(function(synonym, index) {
            return <li key={index}>{synonym}</li>
       })}
        </ul>
    );
} else {
    return null;
}
}

export default Synonyms;