import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cartContext";




export function Cart() {

    const { cart } = useContext(CartContext)
    const { quantity } = useContext(CartContext)
    const { removeFromCart } = useContext(CartContext)

    const [shop, setShop] = useState([])

    useEffect(() => {
        const showProducts = () => {
            setShop(cart)
        }
        showProducts()
    }, [cart])




    return (
        <div>
            {shop ? (
                <h1>El Carrito esta Vacio...</h1>
            ) : (
                shop.map((item) => (
                    <div className="Item">
                        <h2>{item.title}</h2>
                        <img src={item.pictureUrl} alt={item.pictureUrlAlt} />
                        <p>{cart.length} UNID</p>
                        <p>{`${item.price}` * `${quantity}`}</p>
                        <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                    </div>
                )
                )
            )
            }

        </div>
    )

}