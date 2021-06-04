import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Cart } from './components/Cart/Cart';
import { CartContext } from "./components/Context/cartContext";
import { CartProvider } from "./components/Context/cartContext";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCategoryContainer } from "./components/ItemCategoryContainer/ItemCategoryContainer";
import { NavBar } from "./components/NavBar/NavBar";
import { InicioContainer } from "./components/InicioContainer/InicioContainer"
import { CheckOut } from "./components/CheckOut/CheckOut";
import { useContext } from "react"
import React from "react";


function App() {

  const quantity = useContext(CartContext)

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar cartQuantity = { quantity }/>
        <Switch>
          <Route exact path="/" component={InicioContainer} />
          <Route path="/Productos" component={ItemListContainer} />
          <Route path="/categories/:categoryName" component={ItemCategoryContainer} />
          <Route path="/ItemDetail/:id" component={ItemDetailContainer} />
          <Route path="/Cart" component={Cart} />
          <Route path="/CheckOut" component={CheckOut} />
        </Switch>
      </BrowserRouter>
    </CartProvider>
  )
}


export default App;