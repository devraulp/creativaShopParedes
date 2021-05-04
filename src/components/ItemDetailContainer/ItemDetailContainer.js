import { UseState } from "react";
import "./ItemDetailContainer.css";
import {ItemCount} from "../ItemCount/ItemCount"

export const getItem = () => {
    const [almohadon, setAlmohadon] = UseState("")

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
                <h4>Almohadones</h4>
                <img src="https://devraulp.github.io/creativa/img/img1a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }

    const clickMantas = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <h4>Mantas</h4>
                <img src="https://devraulp.github.io/creativa/img/img2a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }
    const clickNidos = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <h4>Nidos</h4>
                <img src="https://devraulp.github.io/creativa/img/img3a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }
    const clickCojines = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <h4>Cojines</h4>
                <img src="https://devraulp.github.io/creativa/img/img4a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }
    const clickSouvenirs = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <h4>Souvenir</h4>
                <img src="https://devraulp.github.io/creativa/img/img5a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }
    const clickBaberos = () => {
        mostreElProducto = () => {
            setAlmohadon(
            <div className="descripProduct" >
                <h4>Baberos</h4>
                <img src="https://devraulp.github.io/creativa/img/img6a.jpg" alt=""/>                
                <ItemCount stock={5} initial={1} onAdd={1} />                            
            </div>)
        }

        promesa()
    }

    return (
        <div>
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