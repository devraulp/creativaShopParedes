import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

export const Item = ({title, pictureUrl, pictureUrlAlt, id}) => {
    return (
        <article className="Item" key={title}>
                <h4>{title}</h4>
                <img src={pictureUrl} alt={pictureUrlAlt}/>
                <Link to={{pathname:`/ItemDetail/${id}`}}><button>Comprar</button></Link>
        </article>
    );
}