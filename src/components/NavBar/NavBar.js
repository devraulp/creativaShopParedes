import './NavBar.css';

export const NavBar = () => {
    return (
        <header>  
            <p className="navbar titulo">CREATIVA</p>  
            <nav className="navbar">          
                <div>            
                    <a href="">Inicio</a>            
                    <a href="">Productos</a>                  
                    <a href="">Contacto</a>            
                </div>
            </nav>
        </header>  
    );
};