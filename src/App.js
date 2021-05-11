import React from "react";
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetailContainer} from "./components/ItemDetailContainer/ItemDetailContainer";
import {Cart} from './components/Cart/Cart';
import {BrowserRouter, Switch, Route} from "react-router-dom"


function App() {
  return (  
    <BrowserRouter>
      <NavBar/> 
      <ItemDetailContainer/>     
      <Switch>
        {/* <Route component={Inicio}/> */}
        <Route component={ItemListContainer}/>
        <Route component={Cart}/>
        {/* <Route component={Contacto}/> */}
      </Switch>
    </BrowserRouter>
  )
}


export default App;