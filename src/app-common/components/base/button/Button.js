import React, { Component } from "react";

import './Button.pcss';

class Button extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <button className={this.props.btnClass} type={this.props.type} onClick={this.props.handleClick}>{this.props.text}</button>
        )
    }
}

export default Button;