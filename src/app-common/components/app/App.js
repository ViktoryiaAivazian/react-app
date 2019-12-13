import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import "./App.pcss";
import HomePage from '../pages/home-page/HomePage.js';
import MoviePage from '../pages/movie-page/MoviePage.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';
import { moviesFetchData } from './app.action.js';
import { sortMoviesAction } from './app.action.js';
import { searchByTypeAction } from './app.action.js';
import { getSearchValAction } from './app.action.js';
import { searchMoviesAction } from './app.action.js';
import { getMovieAction } from './app.action.js';

class App extends Component {

    constructor(props){
        super(props);

        this.getCurrentMovie = this.getCurrentMovie.bind(this);
        // this.onInputValue = this.onInputValue.bind(this);
        // this.searchMovies = this.searchMovies.bind(this);
        // this.onChangeTypeSearch = this.onChangeTypeSearch.bind(this);
        this.onChangeSort = this.onChangeSort.bind(this);
    }

    onChangeSort(e){
        this.props.setTypeSort(e.target.value);
        this.sortMovies(e.target.value);
    }

    sortMovies(sortType){
        let sortMoviesList = this.props.movies;

        switch (sortType) {
            case 'rating':
                sortMoviesList = sortMoviesList.sort((a, b) => (b.vote_count - a.vote_count));
                break;
            case 'date':
                sortMoviesList = sortMoviesList.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)));
                break;
        }
    }

    getCurrentMovie(id) {
        this.props.getMovieDetails(id, this.filterMoviesByGenres(id));
    }

    filterMoviesByGenres(id){

        let movies = this.props.copyMovies;
        let currentGenre = movies.filter(item => item.id === id).map((key) => key.genres);

        let sort = movies.filter((film) => {
            let genres = film.genres.join();
            return currentGenre.reduce((res, genre) => {
                return !!genres.includes(genre) || res;
            }, false);
        });

        return {
            sort,
            currentGenre
        };

    }

    // onInputValue(e){
    //     let val = e.target.value;
    //     this.props.getValSearchMovie(val);
    //
    //     if(!val.length) {
    //         this.clearSearchMovies();
    //     }
    // }
    //
    // clearSearchMovies(){
    //     this.props.search(this.props.copyMovies, 0)
    // }
    //
    // searchMovies(e){
    //     e.preventDefault();
    //
    //     let type = this.props.selectedSearchType;
    //     let updatedMoviesList = this.props.movies;
    //     let value = this.props.searchValue.toLowerCase();
    //
    //     switch (type) {
    //         case 'title':
    //             updatedMoviesList = updatedMoviesList.filter(item => item.title.toLowerCase().includes(value));
    //             break;
    //         case 'genre':
    //             updatedMoviesList = updatedMoviesList.filter((item) => {
    //                 let genres = item.genres.join().toLowerCase().split(',');
    //                 return genres.includes(value)
    //             });
    //             break;
    //     }
    //
    //     this.props.search(updatedMoviesList, updatedMoviesList.length);
    //
    //     if(!value.length){
    //         this.clearSearchMovies();
    //     }
    // }
    //
    // onChangeTypeSearch(e){
    //     this.props.setTypeSearch(e.target.value);
    // }

    componentDidMount(){
        this.props.fetchData('http://reactjs-cdp.herokuapp.com/movies');
    }

    render() {

        const {movies, currentMovie, currentMoviesGenres, sortBy, selectedMovieGenre, copyMovies} = this.props;

        return (
            <ErrorBoundary>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomePage
                                movies={movies}
                                getCurrentMovie={this.getCurrentMovie}
                                onChangeSort={this.onChangeSort}
                                sortBy={sortBy}
                            />
                        </Route>
                        <Route exact path="/movie-page/:id">
                            <MoviePage
                                movies={movies}
                                currentMoviesGenres={currentMoviesGenres}
                                copyMovies={copyMovies}
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

// mapDispatchToProps , mapStateToProps связывают компоненты со строром

// mapStateToProps передает стор в пропсы
// mapStateToProps должна возвращать объект
const mapStateToProps = (state) => {
   return {
       movies: state.app.movies,
       copyMovies: state.app.copyMovies,

       currentMovie: state.app.currentMovie,
       currentMoviesGenres: state.app.currentMoviesGenres,
       selectedMovieGenre: state.app.selectedMovieGenre,

       // searchValue: state.app.searchValue,
       // selectedSearchType: state.app.selectedSearchType,
       // countMovies: state.app.countMovies,
       sortBy: state.app.sortBy,
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(moviesFetchData(url)),
        setTypeSort: sortBy => {
            dispatch(sortMoviesAction(sortBy))
        },
        // setTypeSearch: selectedSearchType => {
        //     dispatch(searchByTypeAction(selectedSearchType))
        // },
        // getValSearchMovie: searchValue => {
        //     dispatch(getSearchValAction(searchValue))
        // },
        // search: (movies, countMovies) => {
        //     dispatch(searchMoviesAction(movies, countMovies))
        // },
        getMovieDetails: (currentMovie, obj) => {
            dispatch(getMovieAction(currentMovie, obj))
        },
    }
};

// connect используется для связывания хранилища Redux с компонентами React.
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);


