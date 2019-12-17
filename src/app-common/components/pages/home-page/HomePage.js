import React, { Component } from "react";

import Header from "../../common/header/Header.js";
import Sort from "../../common/sort/Sort.js";
import MoviesList from "../../common/movies-list/MoviesList.js";
import Footer from "../../common/footer/Footer.js";

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {
            movies,
            getCurrentMovie,
            currentMovie,
            currentMoviesGenres,
            countMovies,
            sortBy,
            onChangeSort,
            copyMovies
        } = this.props;

        return (
            <main className="main">
                <Header movies={movies} copyMovies={copyMovies}/>
                <div className="content">
                    <div className="content__top">
                        <div className="container">
                            <Sort movies={movies} countMovies={countMovies} sortBy={sortBy} onChangeSort={onChangeSort}/>
                        </div>
                    </div>
                    <div className="content__bottom">
                        <div className="container">
                            <MoviesList
                                movies={movies}
                                currentMovie={currentMovie}
                                currentMoviesGenres={currentMoviesGenres}
                                getCurrentMovie={getCurrentMovie}
                            />
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default HomePage;