import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <header>
        <p className="navbar titulo">CREATIVA</p>        
        <nav className="navbar">
          <p>Inicio</p>
          <p>Productos</p>
          <p>Contacto</p>
          <CartWidget/>
        </nav>        
    </header>
  );
};
