import React, { Component } from "react";

import './Radio.pcss';

class Radio extends Component{

    constructor(props){
        super(props);
    }

    render(){

        const {caption, value, name, checked, handleChange} = this.props;

        return (
            <label className="filter__label">
                <input
                    className="filter__radio"
                    type="radio"
                    value={value}
                    name={name}
                    checked={checked}
                    onChange={handleChange}/>

                <span className="filter__span">{caption}</span>
            </label>
        )
    }
}

export default Radio;