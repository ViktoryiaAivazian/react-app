import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Card from "../card/Card.js";

class MoviesList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {movies, getCurrentMovie, currentMoviesGenres, currentMovie} = this.props;
        let obj;

        return (
            <div className="content__outer">
                {
                    currentMovie ? (this.obj = currentMoviesGenres) : (this.obj = movies),
                    this.obj.length ? (
                        this.obj.map((movie, i) =>
                        <div className="content__itm" key={movie.id}>
                            <Link to={`/movie-page/${movie.id}`} onClick={() => { getCurrentMovie(movie.id)}}>
                                <Card
                                    name={movie.title}
                                    year={new Date(movie.release_date).getFullYear()}
                                    genre={movie.genres.join(" , ")}
                                    url={(movie.poster_path ? movie.poster_path : null)}
                                    imgName={movie.title}
                                    id={movie.id}
                                />
                            </Link>
                        </div>
                        )
                    ):
                    (
                        <div className="spinner"> No films found ... </div>
                    )
                }
            </div>
        );
    }
}

export default MoviesList;