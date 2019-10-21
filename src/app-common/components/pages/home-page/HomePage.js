import React, { Component } from "react";

import './HomePage.pcss';
import Header from "../../common/header/Header.js";
import Sort from "../../common/sort/Sort.js";
import MoviesList from "../../common/movieslist/MoviesList.js";
import Footer from "../../common/footer/Footer.js";

class HomePage extends Component {

    constructor(props){
        super(props);
    }

    render() {
        const {movies} = this.props;

        return (
            <main className="main">
                <Header/>
                <div className="content">
                    <div className="content__top">
                        <div className="container">
                            <Sort/>
                        </div>
                    </div>
                    <div className="content__bottom">
                        <div className="container">
                            <MoviesList movies={movies} updateCurrentMovie={this.props.updateCurrentMovie}/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </main>
        );
    }
}

export default HomePage;