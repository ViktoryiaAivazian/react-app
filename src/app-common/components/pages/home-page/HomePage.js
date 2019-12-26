import React  from "react";
import Header from "../../common/header/Header.js";
import Sort from "../../common/sort/Sort.js";
import MoviesList from "../../common/movies-list/MoviesList.js";
import Footer from "../../common/footer/Footer.js";

function HomePage(props) {
    const {
        movies,
        getCurrentMovie,
        currentMovie,
        currentMoviesGenres,
        countMovies,
        sortBy,
        onChangeSort,
        copyMovies
    } = props;

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

export default HomePage;