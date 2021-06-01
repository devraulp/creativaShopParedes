import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';

export const Category = () => {    

    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Categorias
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item><Link to="/">Todas</Link></Dropdown.Item>                
                <Dropdown.Item><Link to="/categories/Souvenirs">Souvenirs</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/categories/Mantas">Mantas</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/categories/Cojines">Cojines</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/categories/Nidos">Nidos</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/categories/Almohadones">Almohadones</Link></Dropdown.Item>
                <Dropdown.Item><Link to="/categories/Baberos">Baberos</Link></Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>   
    )
}