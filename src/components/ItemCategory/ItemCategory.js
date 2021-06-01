import "./ItemCategory.css"
import { getFirestore } from "../../firebase";
import { Item } from "../Item/Item";
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export const ItemCategory = () => {
    const [items, setItems] = useState([])
    const [isEmptyCategory, setIsEmptyCategory] = useState(false)
    const { categoryName } = useParams()

    useEffect(() => {
        setItems()
        const db = getFirestore()
        const ItemCollection = db.collection("Items")
        setTimeout(() => {         
            ItemCollection.get()
            .then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    setIsEmptyCategory(true)
                }
                setItems(querySnapshot.docs.map((doc) => doc.data()).filter((item) => item.category === categoryName))
        })
        .catch((error) => console.error("Firestore error:", error))
        },2000);        
    },[categoryName])
    
    return (
        <div>                        
            {items ? (
                isEmptyCategory ? (
                    <p>Cartegoria sin Productos</p>
                ) : (
                    items.map((item) => (       
                        <Item
                        id={item.id}
                        key={item.title}
                        title={item.title}
                        category={item.category}
                        pictureUrl={item.pictureUrl}
                        pictureUrlAlt={item.pictureUrlAlt}                        
                        />            
                    ))
                )
            ) : (
                <div>
                    <h4>Buscando Productos... </h4>
                </div>                
            )} 
        </div>
    )
}