import React from "react";

function Photos (props) {
    if (props.photos) {
    console.log(props.photos);    
    return (<section className="Photos">
        {props.photos.map(function (photo, index) {
           return 
            <img src={photo.src.landscape}  key={index} />;
           
        })}
    </section>
    );
} else {
    return null;
}
}

export default Photos;