import { useContext, useState, useEffect } from "react"
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";
import "./Cart.css";

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
                <div className="cartEmpty" key="cartEmpty">
                    <h2>El Carrito esta Vacio...</h2>
                    <Link to="/"><button>Regresar</button></Link>
                </div>
            ) : (
                <div className="cart">
                    {shop.map((item) => (
                        <div  key={item.id}>
                            <div className="ItemCart container row">
                                <div className="col">      
                                    <img src={item.pictureUrl} alt={item.pictureUrlAlt} />
                                </div>
                                <div className="col"> 
                                    <h4>{item.category}</h4>                             
                                    <h4>{item.title}</h4>
                                    <p>Cantidad: {item.quantity} UNID</p>
                                    <p>Precio: {`${item.price}` * `${item.quantity}`} UYU</p>
                                </div>
                                <div className="col">                                    
                                    <button onClick={() => removeFromCart(item.id, item.quantity)}>Eliminar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cartTotal">
                        <h3>Total Compra: {totalPrice()} UYU</h3>   
                        <Link to="/CheckOut"><button>Finalizar Compra</button></Link>
                    </div>
                </div>
            )
            }
        </div>
    )
}