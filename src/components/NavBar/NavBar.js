import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { useContext} from "react"
import { Link } from "react-router-dom";
import { CartContext } from "../Context/cartContext";

export function NavBar() {

  const {cartQuantity} = useContext(CartContext)


  return (
    <header>
      <p className="navbar titulo">CREATIVA</p>
      <nav className="navbar">
        <p><Link to="" >Inicio</Link></p>
        <p><Link to="/" > Productos </Link></p>
        <p><Link to="" >Contacto</Link></p>
        <Link to="/Cart" ><CartWidget /></Link>
        <p className="cantCompra" >{cartQuantity}</p>
      </nav>
    </header>
  );
};
