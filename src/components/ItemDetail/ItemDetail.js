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
        <div>
            {items ? (
                <div className="items">
                    <div>
                    <h1>{items.category}</h1>
                    </div>
                    <div className="ItemDetail container row">
                        <div className="col">
                            <img src={items.pictureUrl} alt={items.pictureUrlAlt} />
                        </div>
                        <div className="col">
                            <h2>{items.title}</h2>
                            <p>{items.description}</p>
                        </div>
                        <div className="col">
                        <h4>{items.price} UYU</h4>
                        <ItemCount stock={items.stock} initial={0}  i={items}/>
                        </div>
                    </div>
                </div>    
            ) : (
                <h3>No hay Stock</h3>
            )}

        </div>
    )
}