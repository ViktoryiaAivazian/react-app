import React, { Component } from "react";

import './MoviePage.pcss';
import Movie from "../../common/movie/Movie.js";
import MoviesList from "../../common/movieslist/MoviesList";
import Footer from "../../common/footer/Footer.js";

class MoviePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <main className="main">
                {Object.keys(this.props.movies)
                    .filter(key => this.props.movies[key].id === this.props.currentMovie)
                    .map((key, index) => {
                        return <Movie key={index}
                                      id={this.props.movies[key].id}
                                      name={this.props.movies[key].title}
                                      descr={this.props.movies[key].tagline}
                                      time={this.props.movies[key].runtime}
                                      info={this.props.movies[key].overview}
                                      year={new Date(this.props.movies[key].release_date).getFullYear()}
                                      genre={this.props.movies[key].genres.join(" , ")}
                                      url={(this.props.movies[key].poster_path ? this.props.movies[key].poster_path : null)}
                                      imgName={this.props.movies[key].title}/>
                    })
                }
                <div className="content">
                    <div className="content__top">
                        <div className="container">
                            <span className="movie__genre">Films by {this.props.genre} genre</span>
                        </div>
                    </div>
                    <div className="content__bottom">
                        <div className="container">
                            <MoviesList movies={this.props.movies} updateCurrentMovie={this.props.updateCurrentMovie}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default MoviePage;