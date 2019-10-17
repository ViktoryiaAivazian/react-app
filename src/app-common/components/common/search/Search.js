import React, { Component } from "react";

import './Search.pcss';
import Button from "../../base/button/Button.js";
import Radio from "../../base/radio/Radio.js";

class Search extends Component {

    constructor(props){
        super(props);
    }

    findMovies(e) {

    }

    filterMovies(e) {
        console.log(e.target.value)
    }

    render() {
        return (
            <div className="search">
                <h3 className="search__ttl">Find your movie</h3>
                <input className="search__inp" type="text"/>
                <div className="search__outer">
                    <div className="search__itm">
                        <div className="filter">
                            <span className="filter__text">Search by</span>
                            <Radio name="filter" defaultChecked="checked" handleChange={this.filterMovies} value="Title"/>
                            <Radio name="filter" handleChange={this.filterMovies} value="Genge"/>
                        </div>
                    </div>
                    <div className="search__itm">
                        <Button btnClass="btn" type="button" text="Search" handleClick={this.findMovies}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Search;