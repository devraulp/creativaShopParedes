import { useContext, useState } from "react"
import { CartContext } from "../Context/cartContext";
import { getFirestore } from "../../firebase";
import { Link } from "react-router-dom";
import "./checkOut.css";

export function CheckOut() {   
    
    const [ nombre, setNombre ] = useState()
    const [ email, setEmail ] = useState()
    const [ telefono, setTelefono ] = useState()
    const [ orderId, setOrderId ] = useState(false)
    const { removeFromCart } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    const { cartQuantity } = useContext(CartContext)
    const { totalPrice } = useContext(CartContext)    
    const { emptyCart } = useContext(CartContext)  
    const [ buy, setBuy ] =useState([])  

    function finalizarCompra (e) {       
        
        e.preventDefault();
        const db = getFirestore();
        db.collection("orders").add(
            {
            buyer: {
                name : nombre,
                email : email,
                phone : telefono
            },
            items: cart,
            total: totalPrice(),
        }).then(({id}) => {
            setOrderId(id);
        })
        removeFromCart(cart, cartQuantity);
        setBuy(cart)
        emptyCart()
    }

    const totalPriceBuy = () => {
        let totalPrice = buy.reduce((acc, cv) => (acc += cv.price * cv.quantity), 0)
        return totalPrice
    }

    return (
        <div className="checkOut">
            {orderId ? (
            <div className="checkOutOrder">
                <p>Detalle de tu Compra:</p>
                <hr/>
                <div>
                    {buy.map((item) => (
                        <div key={item.id}>
                            <h2>{item.category}</h2>
                            <h2>{item.title}</h2>
                            <p>Cantidad: {item.quantity} UNID</p>
                            <p>Precio: {`${item.price}` * `${item.quantity}`} UYU</p>
                            <hr/>
                        </div>
                    ))}
                    <h3>Total Compra: {totalPriceBuy()} UYU</h3>   
                </div>
                <hr/>
                <p>Tu Numero de Orden es: <br/> {orderId}</p>
                <hr/>
                <p>Gracias por tu Compra...</p>
                <Link to="/"><button>Regresar</button></Link>
            </div>
            ) : (
            <div className="checkOutForm">
                <h3>Total Compra: {totalPrice()} UYU</h3>
                <div>
                <div className="input-group-sm mb-3" key="nombre">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Nombre</span>
                    <input type="name" onChange={(e)=>setNombre(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <div className="input-group-sm mb-3" key="email">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Email</span>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <div className="input-group-sm mb-3" key="telefono">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Telefono</span>
                    <input type="phone" onChange={(e)=>setTelefono(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
                </div>
                <button onClick={finalizarCompra}>Finalizar Compra</button>
                </div>
            </div>    
            ) }
        </div>
    )
}