import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";

export function Cart() {

    const { cart } = useContext(CartContext)
    const { cartQuantity } = useContext(CartContext)
    const [ shop, setShop ] = useState([])
    const { removeFromCart } = useContext(CartContext)
    const { totalPrice } = useContext(CartContext)

    useEffect(() => {
        setTimeout(() => {
            const showProducts = () => {
                setShop(cart)
            }
            showProducts()
        },2000);
    }, [cart])    

    return (
        <div>
            {cartQuantity === 0 ? (
                <div key="cartEmpty">
                    <h1>El Carrito esta Vacio...</h1>
                    <Link to="/"><button>Regresar</button></Link>
                </div>
            ) : (
                <div>
                    {shop.map((item) => (
                        <div className="Item" key={item.id}>
                            <h4>{item.category}</h4>
                            <h4>{item.title}</h4>
                            <img src={item.pictureUrl} alt={item.pictureUrlAlt} />
                            <p>{item.quantity} UNID</p>
                            <p>{`${item.price}` * `${item.quantity}`} UYU</p>
                            <button onClick={() => removeFromCart(item.id, item.quantity)}>Eliminar</button>
                        </div>
                    ))}
                    <h3>Total Compra: {totalPrice()} UYU</h3>   
                    <Link to="/CheckOut"><button>Finalizar Compra</button></Link>
                </div>
            )
            }
        </div>
    )
}