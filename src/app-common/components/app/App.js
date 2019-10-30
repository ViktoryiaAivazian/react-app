import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import "./App.pcss";
import HomePage from '../pages/home-page/HomePage.js';
import MoviePage from '../pages/movie-page/MoviePage.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            movies: [],
            currentMovie: null,
            currentMoviesGenres: null,
            searchValue: '',
            filteredMovies: [],
            countMovies: null,
            selectedSearchType: 'title',
            sortBy: 'date',
            selectedMovieGenre: null
        };
        this.getCurrentMovie = this.getCurrentMovie.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.searchMovies = this.searchMovies.bind(this);
        this.getTypeBySearch = this.getTypeBySearch.bind(this);
        this.getTypeBySort = this.getTypeBySort.bind(this);
    }

    getTypeBySort(e){
        this.setState({
            sortBy: e.target.value
        });

        this.sortMovies(e.target.value);
    }

    sortMovies(sortType){
        let sortMoviesList = this.state.filteredMovies;

        switch (sortType) {
            case 'rating':
                sortMoviesList = sortMoviesList.sort((a, b) => (b.vote_count - a.vote_count));
                break;
            case 'date':
                sortMoviesList = sortMoviesList.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)));
                break;
        }

        this.setState({
            filteredMovies: sortMoviesList,
        });
    }

    getCurrentMovie(id) {
        this.setState({
            currentMovie: id
        });

        this.filterMoviesByGenres(id);
    }

    filterMoviesByGenres(id){

        let movies = this.state.movies;
        let currentGenre = movies.filter(item => item.id === id).map((key) => key.genres);

        let sort = movies.filter((film) => {
            let genres = film.genres.join();
            return currentGenre.reduce((res, genre) => {
                return !!genres.includes(genre) || res;
            }, false);
        });

        this.setState({
            currentMoviesGenres: sort,
            selectedMovieGenre: currentGenre
        });
    }

    getInputValue(e){
        let val = e.target.value;
        this.setState({
            searchValue: val
        });

        if(!val.length) {
            this.clearSearchMovies();
        }
    }

    clearSearchMovies(){
        this.setState({
            countMovies: 0,
            filteredMovies: this.state.movies
        });
    }

    searchMovies(e){
        e.preventDefault();

        let type = this.state.selectedSearchType;
        let updatedMoviesList = this.state.movies;
        let value = this.state.searchValue.toLowerCase();

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

        this.setState({
            filteredMovies: updatedMoviesList,
            countMovies: updatedMoviesList.length
        });

        if(!value.length){
            this.clearSearchMovies();
        }
    }

    getTypeBySearch(e){
        this.setState({
            selectedSearchType: e.target.value
        });
    }

    componentDidMount(){
        fetch('http://reactjs-cdp.herokuapp.com/movies')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    movies: json.data,
                    filteredMovies: json.data.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)))
                });
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {

        const {movies, currentMovie, searchValue, filteredMovies, countMovies, selectedSearchType, currentMoviesGenres, sortBy, selectedMovieGenre} = this.state;

        return (
            <ErrorBoundary>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomePage
                                filteredMovies={filteredMovies}
                                countMovies={countMovies}
                                selectedSearchType={selectedSearchType}
                                getCurrentMovie={this.getCurrentMovie}
                                getTypeBySearch={this.getTypeBySearch}
                                getInputValue={this.getInputValue}
                                getTypeBySort={this.getTypeBySort}
                                sortBy={sortBy}
                                searchValue={searchValue}
                                searchMovies={this.searchMovies}/>
                        </Route>
                        <Route exact path="/movie-page/:id">
                            <MoviePage
                                movies={movies}
                                currentMoviesGenres={currentMoviesGenres}
                                filteredMovies={filteredMovies}
                                selectedMovieGenre={selectedMovieGenre}
                                getCurrentMovie={this.getCurrentMovie}
                                currentMovie={currentMovie}/>
                        </Route>
                    </Switch>
                </Router>
            </ErrorBoundary>
        );
    }
}

export default App;
