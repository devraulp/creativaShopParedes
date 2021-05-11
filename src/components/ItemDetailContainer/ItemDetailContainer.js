import { useState } from "react";
import "./ItemDetailContainer.css";
import {ItemDetail} from "../ItemDetail/ItemDetail";


export const ItemDetailContainer = () => {
    const [almohadon, setAlmohadon] = useState("")

    let mostreElProducto;
    
    function promesa () {        

        const noMostreElproducto = (error) => {
            setAlmohadon(error);
        }

        let mostrarAlmohadones = new Promise((resolve, reject) => {
            console.log("Buscando el Producto")
            setTimeout(() => {
                resolve("Producto")
            }, 2000);
        })
        mostrarAlmohadones.then(mostreElProducto)
        mostrarAlmohadones.catch(noMostreElproducto)
    }

    const clickAlmohadones = () => {

        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail title={"Almohadones"} src={"https://devraulp.github.io/creativa/img/img1a.jpg"} />
            </div>)                      
        }
        promesa()
    }

    const clickMantas = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail  title={"Mantas"} src={"https://devraulp.github.io/creativa/img/img2a.jpg"} />
            </div>) 
        }
        promesa()
    }

    const clickNidos = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail  title={"Nidos"} src={"https://devraulp.github.io/creativa/img/img3a.jpg"} />
            </div>)
        }
        promesa()
    }

    const clickCojines = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail  title={"Cojines"} src={"https://devraulp.github.io/creativa/img/img4a.jpg"} />
            </div>)
        }

        promesa()
    }

    const clickSouvenirs = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail  title={"Souvenir"} src={"https://devraulp.github.io/creativa/img/img5a.jpg"} />
            </div>)
        }
        promesa()
    }

    const clickBaberos = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <ItemDetail  title={"Baberos"} src={"https://devraulp.github.io/creativa/img/img6a.jpg"} />
            </div>)
        }

        promesa()
    }

    return (
        <div>
            <h3>Seleccione el producto que desea Comprar</h3> 
            <div className="Item" >
                <button onClick={clickAlmohadones}>Almohadones</button>
                <button onClick={clickMantas}>Mantas</button>
                <button onClick={clickNidos}>Nidos</button>
                <button onClick={clickCojines}>Cojines</button>
                <button onClick={clickSouvenirs}>Souvenirs</button>
                <button onClick={clickBaberos}>Baberos</button>                
            </div> 
            <div>{almohadon}</div>
        </div>
    )
}