import React, { Component } from "react";

import './HomePage.pcss';
import Header from "../../common/header/Header.js";
import Sort from "../../common/sort/Sort.js";
import MoviesList from "../../common/movies-list/MoviesList.js";
import Footer from "../../common/footer/Footer.js";

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {getCurrentMovie, getInputValue, searchValue, searchMovies, filteredMovies, countMovies, selectedSearchType, getTypeBySearch, sortBy, getTypeBySort} = this.props;

        return (
            <main className="main">
                <Header getInputValue={getInputValue}
                        searchValue={searchValue}
                        selectedSearchType={selectedSearchType}
                        getTypeBySearch={getTypeBySearch}
                        searchMovies={searchMovies}/>
                <div className="content">
                    <div className="content__top">
                        <div className="container">
                            <Sort count={countMovies} getTypeBySort={getTypeBySort} sortBy={sortBy}/>
                        </div>
                    </div>
                    <div className="content__bottom">
                        <div className="container">
                            <MoviesList filteredMovies={filteredMovies}
                                        getCurrentMovie={getCurrentMovie}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default HomePage;