import React from "react";
import './Button.pcss';

function  Button(props) {
    return (
        <button className={props.btnClass} type={props.type} onClick={props.handlerClick}>{props.text}</button>
    )
}

export default Button;