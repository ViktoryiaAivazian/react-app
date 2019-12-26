import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import HomePage from '../pages/home-page/HomePage.js';
import MoviePage from '../pages/movie-page/MoviePage.js';
import ErrorBoundary from '../errorBoundary/ErrorBoundary.js';
import { moviesFetchData, getMovieAction, sortMoviesAction } from './app.action.js';
import "./App.pcss";

class App extends Component {

    constructor(props){
        super(props);

        this.onChangeSort = this.onChangeSort.bind(this);
        this.getCurrentMovie = this.getCurrentMovie.bind(this);
    }

    onChangeSort(e){
        this.props.setTypeSort(e.target.value, this.sortMovies(e.target.value));
    }

    sortMovies(sortType){
        let sortMoviesList = this.props.movies;

        switch (sortType) {
            case 'rating':
                sortMoviesList = sortMoviesList.sort((a, b) => (b.id - a.id));
                break;
            case 'date':
                sortMoviesList = sortMoviesList.sort((a, b) => (new Date(b.release_date) - new Date(a.release_date)));
                break;
        }

        return sortMoviesList
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

    componentDidMount(){
        this.props.fetchData('http://reactjs-cdp.herokuapp.com/movies');
    }

    render() {

        const {movies, currentMovie, currentMoviesGenres, selectedMovieGenre, copyMovies, countMovies, sortBy} = this.props;

        return (
            <ErrorBoundary>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <HomePage
                                movies={movies}
                                copyMovies={copyMovies}
                                countMovies={countMovies}
                                sortBy={sortBy}
                                getCurrentMovie={this.getCurrentMovie}
                                onChangeSort={this.onChangeSort}
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

// mapDispatchToProps , mapStateToProps связывают компоненты со стором
// mapStateToProps передает стор в пропсы
// mapStateToProps должна возвращать объект
const mapStateToProps = (state) => {
   return {
       movies: state.app.movies,
       copyMovies: state.app.copyMovies,
       sortBy: state.app.sortBy,
       currentMovie: state.app.currentMovie,
       currentMoviesGenres: state.app.currentMoviesGenres,
       selectedMovieGenre: state.app.selectedMovieGenre,
   }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: url => dispatch(moviesFetchData(url)),
        getMovieDetails: (currentMovie, obj) => {
            dispatch(getMovieAction(currentMovie, obj))
        },
        setTypeSort: (sortBy, movies) => {
            dispatch(sortMoviesAction(sortBy, movies))
        },
    }
};

// connect используется для связывания хранилища Redux с компонентами React.
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);


