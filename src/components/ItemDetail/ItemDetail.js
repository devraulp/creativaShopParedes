import React, { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import "./ItemDetail.css";
import { useParams } from "react-router";
import { ItemCount } from "../ItemCount/ItemCount";


export function ItemDetail() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    

    useEffect(() => {
        setTimeout(() => { 
        const getProducts = async () => {
            const db = getFirestore()
            const ItemCollection = db.collection("Bebes")
            const response = await ItemCollection.get()
            const product = response.docs.map((doc) => doc.data())
            setItems(product[id]);
        }
        getProducts()
        },2000);  
    }, [id])


    return (
        <div className="Item">
            <h2>{items.title}</h2>
            <img src={items.pictureUrl} alt={items.pictureUrlAlt} />
            <p>{items.description}</p>
            <h4>{items.price} UYU</h4>
            <ItemCount stock={items.stock} initial={0}  i={items}/>
        </div>
    )
}
