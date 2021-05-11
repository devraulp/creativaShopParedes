import { ItemCount} from "../ItemCount/ItemCount";
import {useState} from "react";
import "./ItemDetail.css";
import React from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({title, src}) => {

    const [quantity, setQuantity] = useState();
    function onAdd (e) {
        setQuantity(e.count)
    }    
    
    
    return (
        <div className="descripProduct" >
            <h4>{title}</h4>
            <img src={src} alt=""/>                
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> 
            <div className="comprar">
                <Link to="/Cart"><button> Añadir al Carrito  ( {quantity} )</button></Link>     
            </div>          
        </div>
    )
        
}

