import './ItemList.css';
import { useState } from "react";

export function Products() {
    
    const [products] = useState ([
        {
            id: "almohadones",
            title: "Almohadones",
            description: "Para cuando se les da el biberón, el cojín ayuda a mantener asimismo la posición indicada al momento de comer de esta forma. Previene el reflujo. tan solo hay que reclinar al bebe en este para que la leche no pueda devolverse a través del esófago.",
            price: 1450,
            pictureUrl: "https://devraulp.github.io/creativa/img/img1a.jpg"
        },
        {
            id: "mantas",
            title: "Mantas",
            description: "Confortables y comodas, elaboradas con tela micro polar doble para mayor abrigo, con un alto de 95cm y un ancho de 75cm cuenta con un lindo dibujo a elección con tela estampada.",
            price: 1000,
            pictureUrl: "https://devraulp.github.io/creativa/img/img2a.jpg"
        },
        {
            id: "nidos",
            title: "Nidos",
            description: "Elaborado en tela algodón y micro polar para brindar mejor comodidad, (reversible). Simula el ambiente cálido del vientre materno. Disminuye los casos de muerte súbita al impedir que se coloque boca abajo involuntariamente. Promueve la posición antirreflujo.",
            price: 1200,
            pictureUrl: "https://devraulp.github.io/creativa/img/img3b.jpg"
        },
        {
            id: "cojines",
            title: "Cojines",
            description: "Lindos cojines en diferentes diseños, para decorar tu living o tu habitación, utilizando materiales de primera calidad y así brindar un mejor confort y dar luminosidad a ese espacio tan especial.",
            price: 1000,
            pictureUrl: "https://devraulp.github.io/creativa/img/img4a.jpg"
        },
        {
            id: "souvenir",
            title: "Souvenir",
            description: "Hermosos kits para bebes, ideales para obsequiar, nacimiento, baby shower, sorprende a esa persona tan especial con estos hermosos detalle, elaborados con todo el amor y con materiales de primera.",
            price: "80",
            pictureUrl: "https://devraulp.github.io/creativa/img/img5a.jpg"
        },
        {
            id: "baberos",
            title: "Baberos",
            description: "Un babero confeccionado con forma de bandana. Esta fabricado en tela absorbente, sin plástico para que las babas del bebe no resbalen. Es un invento original, que ademas de cumplir la función de babero común y corriente, es un accesorio del vestuario del bebe.",
            price: 800,
            pictureUrl: "https://devraulp.github.io/creativa/img/img6b.jpg"
        }
    ])

    return (
        
        <div>
            {products.map(
                        products => (
                            <div className="products" key={`${products.id}`}>
                                <h4>{`${products.title}`}</h4>
                                <img src={`${products.pictureUrl}`} alt=""/>
                                <p>{`${products.description}`}</p>
                                <div>{`${products.price} UYU`}</div>                             
                            </div>
                        )
                )
            }
        </div>   
    )
}