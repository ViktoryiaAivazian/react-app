import React from "react";
import './Radio.pcss';

function Radio(props) {
    const {caption, value, name, checked, handleChange} = props;

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

export default Radio;