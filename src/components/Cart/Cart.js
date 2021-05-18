import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";




export function Cart() {

    const { cart } = useContext(CartContext)
    const { quantity } = useContext(CartContext)
    const { removeFromCart } = useContext(CartContext)

    const [shop, setShop] = useState([])

    useEffect(() => {
        setTimeout(() => {
            const showProducts = () => {
                setShop(cart)
            }
            showProducts()
        }, 1000);
    }, [cart])




    return (
        <div>
            {quantity === 0 ? (
                <div>
                    <h1>El Carrito esta Vacio...</h1>
                    <button><Link to="/Productos">Regresar</Link></button>
                </div>
            ) : (
                shop.map((item) => (
                    <div className="Item" key={item.key}>
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