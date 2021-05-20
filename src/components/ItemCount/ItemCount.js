import { useState } from "react"
import "./ItemCount.css"
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";


export const ItemCount = ({ stock, initial, i }) => {

    const [count, setCount] = useState(0);
    const [stockItem, setStockItem] = useState(stock)
    const { addToCart } = useContext(CartContext)
    const { shopToCart } = useContext(CartContext)

    function restar() {
        if (count > initial) {
            setCount(count - 1);
        }
        
    }

    function sumar() {
        if (count < stockItem) {
            setCount(count + 1);
        } else if ( count === stockItem ) {
            alert("No hay mas Stock");
        }else {
            alert("No hay mas Stock")
        }
    }


    const añadirAlCarrito = () => {
        shopToCart(count)
        addToCart(i, count)
        let outStock = stockItem - count
        setStockItem(outStock)
        setCount(0)
    }



    return (
        <div className="itemCount" >
            <button onClick={restar}> - </button>
            <input value={count} type="number" disabled />
            <button onClick={sumar}> + </button>
            {stockItem === 0 ? (
                <div>
                    <Link to="/Cart"><button>Finalizar Compra</button> </Link>
                    <Link to="/Productos"><button> Seguir Comprando </button> </Link>                    
                </div>
            ) : (
                <button onClick={añadirAlCarrito}>Añadir al Carrito</button>
                )
            }
        </div>

    )
}