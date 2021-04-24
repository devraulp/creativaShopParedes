import './App.css';

import {NavBar} from "./components/NavBar/NavBar";

import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";



function App() {
  return (        
    <div>
      <NavBar/>
      <ItemListContainer greeting="Lista de Ariculos"/>
    </div>    
  )
}


export default App;