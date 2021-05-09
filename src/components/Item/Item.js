import React from "react";
import "./Item.css";

export function Item(props) {
    return (
        <div className="item">
            <div>
                <h4>{props.title}</h4>
                <img src={props.pictureUrl} alt=""/>
                <p>{props.description}</p>
                <div>Precio {props.price} UYU</div>
            </div>
        </div>
    );
}