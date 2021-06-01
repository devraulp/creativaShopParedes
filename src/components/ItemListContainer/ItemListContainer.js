import './ItemListContainer.css';
import { ItemList } from "../ItemList/ItemList"
import { Category } from "../Category/Category"


export const ItemListContainer = () => {

    return (
        <div className="Items">
            <Category />           
            <ItemList categoryName={"Bebes"} />
        </div>
    );
};