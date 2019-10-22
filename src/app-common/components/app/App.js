import React, { Component } from "react";
import {Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.pcss";
import HomePage from '../pages/home-page/HomePage.js';
import MoviePage from '../pages/movie-page/MoviePage.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: null,
            currentMovie: null
        };
        this.updateCurrentMovie = this.updateCurrentMovie.bind(this);
    }

    updateCurrentMovie(id) {
        this.setState({ currentMovie: id});
    }

    componentDidMount(){
        fetch('http://reactjs-cdp.herokuapp.com/movies')
            .then(res => res.json())
            .then(json => {
                this.setState({ movies: json.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const {movies, currentMovie} = this.state;

        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <HomePage movies={movies} updateCurrentMovie={this.updateCurrentMovie}/>
                    </Route>
                    <Route exact path="/movie-page/:id">
                        <MoviePage movies={movies} updateCurrentMovie={this.updateCurrentMovie} currentMovie={currentMovie}/>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
