import './ItemCategoryContainer.css';
import { ItemCategory } from "../ItemCategory/ItemCategory"
import { Category } from "../Category/Category"


export const ItemCategoryContainer = () => {

    return (
        <div className="Items">  
            <Category />  
            <ItemCategory categoryName={"Bebes"} />
        </div>
    );
};