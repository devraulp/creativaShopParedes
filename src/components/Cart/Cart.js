import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";




export function Cart() {

    const { cart } = useContext(CartContext)
    const {cartQuantity} = useContext(CartContext)
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
            {cartQuantity === 0 ? (
                <div>
                    <h1>El Carrito esta Vacio...</h1>
                    <Link to="/Productos"><button>Regresar</button></Link>
                </div>
            ) : (
                shop.map((item) => (
                    <div className="Item" key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.pictureUrl} alt={item.pictureUrlAlt} />
                        <p>{item.quantity} UNID</p>
                        <p>{`${item.price}` * `${item.quantity}`}</p>
                        <button onClick={() => removeFromCart(item.id, item.quantity)}>Eliminar</button>
                    </div>
                )
                )
            )
            }

        </div>
    )

}