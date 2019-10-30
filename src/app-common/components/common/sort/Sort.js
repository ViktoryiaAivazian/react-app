import React, { Component } from "react";

import './Sort.pcss';
import Radio from "../../base/radio/Radio.js";

class Sort extends Component {

    constructor(props){
        super(props)
    }

    render() {

        const {sortBy, getTypeBySort} = this.props;

        return (
            <div className="sort">
                <div className="sort__outer">
                    <div className="sort__itm">
                        <span className="sort__count">{this.props.count > 0 ? `${this.props.count} movies found`: ''}</span>
                    </div>
                    <div className="sort__itm">
                        <div className="filter">
                            <span className="filter__text">Sort by:</span>
                            <Radio name="sort" checked={sortBy === 'date'} caption="Release date" handleChange={(e) => getTypeBySort(e)} value="date"/>
                            <Radio name="sort" checked={sortBy === 'rating'} caption="Rating" handleChange={(e) => getTypeBySort(e)} value="rating"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sort;