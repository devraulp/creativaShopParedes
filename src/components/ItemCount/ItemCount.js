import { useState } from "react"
import "./ItemCount.css"


export const ItemCount = ({stock, initial, onAdd}) => {        

    const [count, setCount] = useState(1);

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

    return ( 
        <div className="itemCount" >
            <button onClick={restar}> - </button>
            <input value={count} type="number" onChange={onAdd({count})} disabled/>
            <button onClick={sumar}> + </button>
        </div>

    )
}