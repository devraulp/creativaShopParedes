import React, { useState, useContext } from "react";
import { ItemCount } from "../ItemCount/ItemCount"
import "./ItemDetail.css";

export function ItemDetail(props) {

    const [cantidad, setCantidad] = useState(1);

    function productsWished (c) {
        setCantidad(c);
    }

    return (
        <div>
            <ItemCount
                func={productsWished}
            />
            <input
                type="button"
                value={`Añadir al carrito ${cantidad}`}
            />            
        </div>
    );
}
