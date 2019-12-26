import React from "react";

function Img(props){
    const {imgClass, url, imgName} = props;

    return (
        <img className={imgClass} src={url} alt={imgName}/>
    )
}

export default Img;