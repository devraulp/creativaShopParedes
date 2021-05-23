import { useContext, useState, useEffect } from "react"
import { getFirestore } from "../../firebase";
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";

export function Cart() {

    const { cart } = useContext(CartContext)
    const { cartQuantity } = useContext(CartContext)
    const { removeFromCart } = useContext(CartContext)
    const [shop, setShop] = useState([])
    const [ orderId, setOrderId ] = useState(false)
    const [ nombre, setNombre ] = useState()
    const [ email, setEmail ] = useState()
    const [ telefono, setTelefono ] = useState()



    useEffect(() => {
        setTimeout(() => {
            const showProducts = () => {
                setShop(cart)
            }
            showProducts()
        });
    }, [cart])    

    const price = () => {
        let totalPrice = shop.reduce((acc, cv) => (acc += cv.price * cv.quantity), 0)
        return totalPrice
    }


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
            total: price(),
        }).then(({id}) => {
            setOrderId(id);
            alert("Tu Numero de Orden es " + id)
            removeFromCart(cart, cartQuantity)
        })
        
    }
    console.log(orderId);

    return (
        <div>
            {cartQuantity === 0 ? (
                <div key="cartEmpty">
                    <h1>El Carrito esta Vacio...</h1>
                    <Link to="/Productos"><button>Regresar</button></Link>
                </div>
            ) : (
                <div>
                    {shop.map((item) => (
                        <div key="">
                            <div className="Item" key={item.id}>
                                <h2>{item.title}</h2>
                                <img src={item.pictureUrl} alt={item.pictureUrlAlt} />
                                <p>{item.quantity} UNID</p>
                                <p>{`${item.price}` * `${item.quantity}`} UYU</p>
                                <button onClick={() => removeFromCart(item.id, item.quantity)}>Eliminar</button>
                            </div>
                        </div>
                    ))}
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
            )
            }
        </div>
    )
}