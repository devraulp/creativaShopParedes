import { useEffect, useState } from "react";
import { getFirestore } from "../../firebase";
import { Item } from "../Item/Item";
import "./ItemList.css"


export const ItemList = () => {
    const [items, setItems] = useState([])
    const [isEmptyCategory, setIsEmptyCategory] = useState(false)

    useEffect(() => {
        setItems()
        const db = getFirestore()
        const ItemCollection = db.collection("Bebes")
        setTimeout(() => {         
            ItemCollection.get()
            .then((querySnapshot) => {
                if(querySnapshot.size === 0) {
                    setIsEmptyCategory(true)
                }
                setItems(querySnapshot.docs.map((doc)=> doc.data()))
        })
        .catch((error) => console.error("Firestore error:", error))
        },2000);        
    }, [])
    
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
                        pictureUrl={item.pictureUrl}
                        pictureUrlAlt={item.pictureUrlAlt}
                        />            
                    )
                )
                )
            ) : (
                <div>
                    <h4>Buscando Productos... </h4>
                </div>                
            )} 
        </div>
    )
}
