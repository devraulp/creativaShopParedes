import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({title, pictureUrl, pictureUrlAlt, id, category}) => {
    return (
        <article className="Item" key={id}>
            <h4>{category}</h4>
            <h5>{title}</h5>
            <img src={pictureUrl} alt={pictureUrlAlt}/>
            <Link to={{pathname:`/ItemDetail/${id}`}}><button>Comprar</button></Link>
        </article>
    );
}