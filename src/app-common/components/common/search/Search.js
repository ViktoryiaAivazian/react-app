import React, {Component, Fragment} from "react";

import './Search.pcss';
import Button from "../../base/button/Button.js";
import Radio from "../../base/radio/Radio.js";

class Search extends Component {

    constructor(props){
        super(props);
    }

    render() {

        const {getInputValue, searchValue, searchMovies, getTypeBySearch, selectedSearchType} = this.props;

        return (
            <div className="search">
                <h3 className="search__ttl">Find your movie</h3>
                <form onSubmit={(e) => {searchMovies(e)}}>
                    <input className="search__inp" value={searchValue} type="text" onChange={(e) => {getInputValue(e)}}/>
                    <div className="search__outer">
                        <div className="search__itm">
                            <div className="filter">
                                <span className="filter__text">Search by</span>
                                <Radio name="filter" checked={selectedSearchType === 'title'} handleChange={(e) => getTypeBySearch(e)} caption="Title" value="title"/>
                                <Radio name="filter" checked={selectedSearchType === 'genre'} handleChange={(e) => getTypeBySearch(e)} caption="Genre" value="genre"/>
                            </div>
                        </div>
                        <div className="search__itm">
                            <Button btnClass="btn" type="submit" text="Search" handleClick={(e) => {searchMovies(e)}}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Search;