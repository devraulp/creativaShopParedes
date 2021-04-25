import './ItemListContainer.css';
import {Products} from "../ItemList/ItemList"

export const ItemListContainer = (props) => {
    return (
        <div>
            <p className="Items" >{props.greeting}</p>
            <div>
                <Products/>
            </div>
        </div>
    );    
};