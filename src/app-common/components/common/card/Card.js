import React, { Component } from "react";

import './Card.pcss';
import Img from "../../base/img/Img.js";

class Card extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="card" id={this.props.id}>
                <div className="card__preview">
                    <Img imgClass="card__img" url={this.props.url} imgName={this.props.imgName}/>
                </div>
                <div className="card__desc">
                    <div className="card__top">
                        <span className="card__name">{this.props.name}</span>
                        <span className="card__year">{this.props.year}</span>
                    </div>
                    <span className="card__genre">{this.props.genre}</span>
                </div>
            </div>
        );
    }
}

export default Card;