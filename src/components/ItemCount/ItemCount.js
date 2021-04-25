import { useState } from "react"
import "./ItemCount.css"


export const ItemCount = ({stock, initial, onAdd}) => {        

    const [count, setCount] = useState(1);

    function restar () {
        if(count > initial){
        setCount(count - onAdd);
        }
    }

    function sumar () {
        if(count < stock){
        setCount(count + onAdd);
        }else {
            alert("No hay mas Stock");
        }
    }
    
    return ( 
        <div className="itemCount">
            <div>
                <button onClick={restar}> - </button>
                <p type="number"> {count} </p>
                <button onClick={sumar}> + </button>                
            </div>
            <p> Stock Disponible : {stock} unidades </p>
            <div className="comprar">
                <button>Añadir al Carrito</button>
            </div>
        </div>
        
    )
}