import React, { Component } from "react";

import './Img.pcss';

function Img(props){
    return (
        <img className={props.imgClass} src={props.url} alt={props.imgName}/>
    )
}

export default Img;