import { useState } from "react";
import "./ItemDetail.css";

export const ItemDetail = () => {
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
                <h4>Almohadones</h4>
                <img src="https://devraulp.github.io/creativa/img/img1a.jpg" alt=""/>                
                <p>Para cuando se les da el biberón, el cojín ayuda a mantener asimismo la posición indicada al momento de comer de esta forma. Previene el reflujo. tan solo hay que reclinar al bebe en este para que la leche no pueda devolverse a través del esófago.</p>
                <p>1450</p>                            
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
                <p>Confortables y comodas, elaboradas con tela micro polar doble para mayor abrigo, con un alto de 95cm y un ancho de 75cm cuenta con un lindo dibujo a elección con tela estampada.</p>
                <p>1000</p>
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
                <p>Elaborado en tela algodón y micro polar para brindar mejor comodidad, (reversible). Simula el ambiente cálido del vientre materno. Disminuye los casos de muerte súbita al impedir que se coloque boca abajo involuntariamente. Promueve la posición antirreflujo.</p>
                <p>1200</p>
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
                <p>Lindos cojines en diferentes diseños, para decorar tu living o tu habitación, utilizando materiales de primera calidad y así brindar un mejor confort y dar luminosidad a ese espacio tan especial.</p>
                <p>1000</p>
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
                <p>Hermosos kits para bebes, ideales para obsequiar, nacimiento, baby shower, sorprende a esa persona tan especial con estos hermosos detalle, elaborados con todo el amor y con materiales de primera.</p>
                <p>80</p>
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
                <p>Un babero confeccionado con forma de bandana. Esta fabricado en tela absorbente, sin plástico para que las babas del bebe no resbalen. Es un invento original, que ademas de cumplir la función de babero común y corriente, es un accesorio del vestuario del bebe.</p> 
                <p>800</p>                             
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