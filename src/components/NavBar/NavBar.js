import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export function NavBar({ quantity = 0 }) {

  return (
    <header>
      <p className="navbar titulo">CREATIVA</p>
      <nav className="navbar">
        <p><Link to="" >Inicio</Link></p>
        <p><Link to="/Productos" > Productos </Link></p>
        <p><Link to="" >Contacto</Link></p>
        <Link to="/Cart" ><CartWidget /></Link>
        <p className="cantCompra" >{quantity}</p>
      </nav>
    </header>
  );
};
