import { useContext, useState } from "react"
import Modal from 'react-bootstrap/Modal'
import { CartContext } from "../Context/cartContext";
import { getFirestore } from "../../firebase";
import { Link } from "react-router-dom";
import "./checkOut.css";

export function CheckOut() {

    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [email2, setEmail2] = useState()
    const [telefono, setTelefono] = useState()
    const [orderId, setOrderId] = useState(false)
    const { removeFromCart } = useContext(CartContext)
    const { cart } = useContext(CartContext)
    const { cartQuantity } = useContext(CartContext)
    const { totalPrice } = useContext(CartContext)
    const { emptyCart } = useContext(CartContext)
    const [buy, setBuy] = useState([])
    const [smShow, setSmShow] = useState(false);

    

    function finalizarCompra(e) {                
        // e.preventDefault();
        const db = getFirestore();
        db.collection("orders").add(
            {
                buyer: {
                    name: nombre,
                    email: email,
                    phone: telefono
                },
                items: cart,
                total: totalPrice(),
            }).then(({ id }) => {
                setOrderId(id);
            })
        removeFromCart(cart, cartQuantity);
        setBuy(cart)
        emptyCart()
    }

    function buttonFinalizarCompra() {
        if(email === email2){
            finalizarCompra()
        }else{
            setSmShow(true)
        }
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
                    <hr />
                    <div>
                        {buy.map((item) => (
                            <div key={item.id}>
                                <h2>{item.category}</h2>
                                <h2>{item.title}</h2>
                                <p>Cantidad: {item.quantity} UNID</p>
                                <p>Precio: {`${item.price}` * `${item.quantity}`} UYU</p>
                                <hr />
                            </div>
                        ))}
                        <h3>Total Compra: {totalPriceBuy()} UYU</h3>
                    </div>
                    <hr />
                    <p>Tu Numero de Orden es: <br /> {orderId}</p>
                    <hr />
                    <p>Gracias por tu Compra...</p>
                    <Link to="/"><button>Regresar</button></Link>
                </div>
            ) : (
                <div className="checkOutForm">
                    <h3>Total Compra: {totalPrice()} UYU</h3>

                    <div className="input-group-sm mb-3" key="nombre">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Nombre*</span>
                        <input type="name" onChange={(e) => setNombre(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group-sm mb-3" key="email">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Email*</span>
                        <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group-sm mb-3" key="email2">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Confirme el Email*</span>
                        <input type="email" onChange={(e) => setEmail2(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div className="input-group-sm mb-3" key="telefono">
                        <span className="input-group-text" id="inputGroup-sizing-sm">Telefono*</span>
                        <input type="phone" onChange={(e) => setTelefono(e.target.value)} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                    </div>
                    <div>
                        {nombre && email && telefono ? (
                            <div>                             
                                    <Modal
                                    size="sm"
                                    show={smShow}
                                    onHide={() => setSmShow(false)}
                                    aria-labelledby="example-modal-sizes-title-sm">
                                    <Modal.Header closeButton>
                                        <Modal.Title id="example-modal-sizes-title-sm">
                                            Error
                                    </Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Los Correos NO Coinciden</Modal.Body>
                                    </Modal>
                                <button onClick={buttonFinalizarCompra}>Finalizar Compra</button>
                            </div>
                        ) : (
                            <p>*Ingrese todos los datos <br /> para finalizar la Compra</p>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}