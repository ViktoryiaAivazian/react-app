import React, { Component } from "react";
import {Link} from 'react-router-dom';

import './MoviesListGenres.pcss';
import Card from "../card/Card.js";

class MoviesListGenres extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {getCurrentMovie, currentMoviesGenres} = this.props;
        return (
            <div className="content__outer">
                { currentMoviesGenres.length ? (
                        currentMoviesGenres.map((movie, i) =>
                            <div className="content__itm" key={movie.id}>
                                <Link to={`/movie-page/${movie.id}`} onClick={() => { getCurrentMovie(movie.id)}}>
                                    <Card
                                        name={movie.title}
                                        year={new Date(movie.release_date).getFullYear()}
                                        genre={movie.genres.join(" , ")}
                                        url={(movie.poster_path ? movie.poster_path : null)}
                                        imgName={movie.title}
                                        id={movie.id}/>
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

export default MoviesListGenres;