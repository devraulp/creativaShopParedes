import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"

export const NavBar = () => {
  return (
    <header>
        <p className="navbar titulo">CREATIVA</p>        
        <nav className="navbar">
          <p><Link to="" >Inicio</Link></p>
          <p> Productos </p>
          <p><Link to="" >Contacto</Link></p>
          <CartWidget/>
        </nav>        
    </header>
  );
};
