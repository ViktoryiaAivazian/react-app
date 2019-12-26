import React from "react";
import './Card.pcss';
import Img from "../../base/img/Img.js";

function Card(props) {
    return (
        <div className="card" id={props.id}>
            <div className="card__preview">
                <Img imgClass="card__img" url={props.url} imgName={props.imgName}/>
            </div>
            <div className="card__desc">
                <div className="card__top">
                    <span className="card__name">{props.name}</span>
                    <span className="card__year">{props.year}</span>
                </div>
                <span className="card__genre">{props.genre}</span>
            </div>
        </div>
    );
}

export default Card;