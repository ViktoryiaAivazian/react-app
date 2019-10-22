import React, { Component } from "react";

import './Sort.pcss';
import Radio from "../../base/radio/Radio.js";

class Sort extends Component {

    constructor(props){
        super(props)
    }

    sortMovies(e){
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="sort">
                <div className="sort__outer">
                    <div className="sort__itm">
                        <span className="sort__count">{this.props.count} movie found</span>
                    </div>
                    <div className="sort__itm">
                        <div className="filter">
                            <span className="filter__text">Sort by:</span>
                            <Radio name="sort" defaultChecked="checked" handleChange={this.sortMovies} value="Release date"/>
                            <Radio name="sort" handleChange={this.sortMovies} value="Rating"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;