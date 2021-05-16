// import { CartContext } from "./components/Context/cartContext";
// import { CartProvider } from "./components/Context/cartContext";
// import { useContext} from "react"
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import  {Cart}  from './components/Cart/Cart';
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import React from "react";


function App() {

  // const quantity = useContext(CartContext)cartQuantity={quantity}

  return (
    // <CartProvider>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/Productos" component={ItemListContainer} />
        <Route path="/ItemDetail/:id" component={ItemDetailContainer} />
        <Route exact path="/Cart" component={Cart} />
      </Switch>
    </BrowserRouter>
    // </CartProvider>
  )
}


export default App;