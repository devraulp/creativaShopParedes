import "./ItemDetail.css";
import { getFirestore } from "../../firebase";
import { ItemCount } from "../ItemCount/ItemCount";
import { useParams} from "react-router";
import { useEffect, useState } from "react"

export function ItemDetail() {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        setTimeout(() => {
            const getProducts = async () => {
                const db = getFirestore()
                const ItemCollection = db.collection("Items")
                const response = await ItemCollection.get()
                const product = response.docs.map((doc) => doc.data())
                setItems(product.find((item) => item.id === id));
            }
            getProducts()
        }, 2000);
    }, [id, items])

    return (
        <div >
            {items ? (
                <div className="Item">
                    <h2>{items.title}</h2>
                    <img src={items.pictureUrl} alt={items.pictureUrlAlt} />
                    <p>{items.description}</p>
                    <h4>{items.price} UYU</h4>
                    <ItemCount stock={items.stock} initial={0}  i={items}/>
                </div>
            ) : (
                <h3>No hay Stock</h3>
            )}

        </div>
    )
}