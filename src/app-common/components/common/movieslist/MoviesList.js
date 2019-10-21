import React, { Component } from "react";
import {Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './MoviesList.pcss';
import Card from "../card/Card.js";

class MoviesList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {movies} = this.props;
        return (
            <div className="content__outer">
                { movies ? (
                    movies.map((movie, i) =>
                        <div className="content__itm" key={movie.id}>
                            <Link to={`/movie-page/${movie.id}`} onClick={() => { this.props.updateCurrentMovie(movie.id)}}>
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
                        <div className="spinner"> Loading ...</div>
                    )
                }
            </div>
        );
    }
}

export default MoviesList;