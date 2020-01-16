import React, {Component} from "react";
import './Search.pcss';
import Button from "../../base/button/Button.js";
import Radio from "../../base/radio/Radio.js";
import {connect} from "react-redux";
import {
    getSearchValAction,
    searchByTypeAction,
    searchMoviesAction,
} from "./search.action";

class Search extends Component {

    constructor(props){
        super(props);

        this.onInputValue = this.onInputValue.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.onChangeTypeSearch = this.onChangeTypeSearch.bind(this);
    }

    onInputValue(e){
        let val = e.target.value;
        this.props.getValSearchMovie(val);

        if(!val.length) {
            this.clearSearchMovies();
        }
    }

    clearSearchMovies(){
        this.props.search(this.props.copyMovies, 0)
    }

    searchMovies(e){
        e.preventDefault();

        let type = this.props.selectedSearchType;
        let updatedMoviesList = this.props.movies;
        let value = this.props.searchValue.toLowerCase();

        switch (type) {
            case 'title':
                updatedMoviesList = updatedMoviesList.filter(item => item.title.toLowerCase().includes(value));
                break;
            case 'genre':
                updatedMoviesList = updatedMoviesList.filter((item) => {
                    let genres = item.genres.join().toLowerCase().split(',');
                    return genres.includes(value)
                });
                break;
        }

        this.props.search(updatedMoviesList, updatedMoviesList.length);

        if(!value.length){
            this.clearSearchMovies();
        }
    }

    onChangeTypeSearch(e){
        this.props.setTypeSearch(e.target.value);
    }

    render() {

        return (
            <div className="search">
                <h3 className="search__ttl">Find your movie</h3>
                <form onSubmit={(e) => {this.searchMovies(e)}}>
                    <input className="search__inp" value={this.props.searchValue} type="text" onChange={(e) => {this.onInputValue(e)}}/>
                    <div className="search__outer">
                        <div className="search__itm">
                            <div className="filter">
                                <span className="filter__text">Search by</span>
                                <Radio name="filter" checked={this.props.selectedSearchType === 'title'} handleChange={(e) => this.onChangeTypeSearch(e)} caption="Title" value="title"/>
                                <Radio name="filter" checked={this.props.selectedSearchType === 'genre'} handleChange={(e) => this.onChangeTypeSearch(e)} caption="Genre" value="genre"/>
                            </div>
                        </div>
                        <div className="search__itm">
                            <Button btnClass="btn" type="submit" text="Search" handleClick={(e) => {this.searchMovies(e)}}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchValue: state.search.searchValue,
        selectedSearchType: state.search.selectedSearchType,
        countMovies: state.search.countMovies,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        setTypeSearch: selectedSearchType => {
            dispatch(searchByTypeAction(selectedSearchType))
        },
        getValSearchMovie: searchValue => {
            dispatch(getSearchValAction(searchValue))
        },
        search: (movies, countMovies) => {
            dispatch(searchMoviesAction(movies, countMovies))
        },
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Search);
