import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from './components/Cart/Cart';
import { CartContext } from "./components/Context/cartContext";
import { CartProvider } from "./components/Context/cartContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { useContext } from "react"
import React from "react";


function App() {

  const quantity = useContext(CartContext)

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar cartQuantity = { quantity }/>
        <Switch>
          <Route path="/Productos" component={ItemListContainer} />
          <Route path="/ItemDetail/:id" component={ItemDetailContainer} />
          <Route exact path="/Cart" component={Cart} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}


export default App;