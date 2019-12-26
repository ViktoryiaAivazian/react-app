import React from "react";
import Movie from "../../common/movie/Movie.js";
import Footer from "../../common/footer/Footer.js";
import MoviesList from "../../common/movies-list/MoviesList";

function MoviePage(props) {
    const {movies, currentMovie, getCurrentMovie, currentMoviesGenres, selectedMovieGenre} = props;

    return (
        <main className="main">
            {Object.keys(movies)
                .filter(key => movies[key].id === currentMovie)
                .map((key, index) => {
                    return <Movie key={index}
                                  id={movies[key].id}
                                  name={movies[key].title}
                                  descr={movies[key].tagline}
                                  time={movies[key].runtime}
                                  info={movies[key].overview}
                                  year={new Date(movies[key].release_date).getFullYear()}
                                  genre={movies[key].genres.join(" , ")}
                                  url={(movies[key].poster_path ? movies[key].poster_path : null)}
                                  imgName={movies[key].title}/>
                })
            }
            <div className="content">
                <div className="content__top">
                    <div className="container">
                        <span className="movie__genre">Films by {selectedMovieGenre.join(" , ").toLowerCase()} genres</span>
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

export default MoviePage;