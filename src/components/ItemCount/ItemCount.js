import { useState } from "react"
import "./ItemCount.css"
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";


export const ItemCount = ({stock, initial, i}) => {        

    const [count, setCount] = useState(0);
    const {addToCart} = useContext(CartContext)
    const {shopToCart} = useContext(CartContext)

    function restar () {
        if(count > initial){
        setCount(count - 1);
        }
    }

    function sumar () {
        if(count < stock){
        setCount(count + 1);
        }else {
            alert("No hay mas Stock");
        }
    }

    function añadirAlCarrito() {
        shopToCart(count)
        addToCart(i)
    }
    


    return ( 
        <div className="itemCount" >
            <button onClick={restar}> - </button>
            <input value={count} type="number" disabled/>
            <button onClick={sumar}> + </button>
            <button onClick={añadirAlCarrito}>Añadir al Carrito</button>
        </div>

    )
}