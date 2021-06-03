import "./ItemCount.css"
import { CartContext } from "../Context/cartContext";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useState, useEffect } from "react"
import Modal from 'react-bootstrap/Modal'


export const ItemCount = ({ stock, initial, i }) => {

    const [count, setCount] = useState(initial);
    const { addToCart } = useContext(CartContext)
    const { shopToCart } = useContext(CartContext)
    const [stockItem, setStockItem] = useState(false)
    const [smShow, setSmShow] = useState(false);


    useEffect(() => {
        setTimeout(() => {
            const getProducts = () => {
                setStockItem(stock)
            }
            getProducts()
        }, 0);
    }, [stock])

    function restar() {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    function sumar() {
        if (count < stockItem) {
            setCount(count + 1);
        } else if (count === stockItem) {
            setSmShow(true)
        }
    }

    const añadirAlCarrito = () => {
        shopToCart(count)
        addToCart(i, count)
        let outStock = stockItem - count
        setStockItem(outStock)
        setCount(0)
    }

    return (
        <div>
            {stockItem >= 0 ? (

                <div className="itemCount" >
                    <button className="buttonCount" onClick={restar}> - </button>
                    <input value={count} type="number" disabled />
                    <button className="buttonCount" onClick={sumar}> + </button>
                    <p>Stock Disponoble : {stockItem}</p>
                    {stockItem < stock ? (
                        <div>
                            <button onClick={añadirAlCarrito}>Añadir al Carrito</button>
                            <Link to="/Cart"><button>Ir al Carrito</button> </Link>
                            <Link to="/"><button> Seguir Comprando </button> </Link>
                        </div>
                    ) : (
                        <button onClick={añadirAlCarrito}>Añadir al Carrito</button>
                    )
                    }
                </div>
            ) : (
                <div>
                    <h4>Consultando Stock... </h4>
                </div>
            )}
            {count === stockItem ? (
                <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Lo sentimos mucho!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>No hay mas Stock</Modal.Body>
                </Modal>
            ) : (
                <div></div>
            )}
        </div>
    )
}
