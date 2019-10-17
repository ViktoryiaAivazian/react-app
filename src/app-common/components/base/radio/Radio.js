import React, { Component } from "react";

import './Radio.pcss';

class Radio extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <label className="filter__label">
                <input className="filter__radio" type="radio" value={this.props.value} name={this.props.name} checked={this.props.defaultChecked} onChange={this.props.handleChange}/>
                <span className="filter__span">{this.props.value}</span>
            </label>
        )
    }
}

export default Radio;