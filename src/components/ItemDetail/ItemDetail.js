import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import "./ItemDetail.css";
import { useParams } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../Context/cartContext";

export function ItemDetail() {
    const [items, setItems] = useState([])
    const { id } = useParams()
    const {addToCart} = useContext(CartContext)

    

    useEffect(() => {
        const getProducts = async () => {
            const db = getFirestore()
            const ItemCollection = db.collection("Bebes")
            const response = await ItemCollection.get()
            const product = response.docs.map((doc) => doc.data())
            setItems(product[id]);
        }
        getProducts()
    }, [id])

    const [count, setCount] = useState();
    function onAdd(e) {
        setCount(e.count)
    }

    return (
        <div className="Item">
            <h2>{items.title}</h2>
            <img src={items.pictureUrl} alt={items.pictureUrlAlt} />
            <p>{items.description}</p>
            <h4>{items.price} UYU</h4>
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            <button onClick={() => addToCart(items)}>Añadir al Carrito ({count})</button>
        </div>
    )
}
