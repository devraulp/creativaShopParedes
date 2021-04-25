import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {Item} from "./components/Item/Item"


function App() {
  return (        
    <div>
      <NavBar/>
      <Item/>
      <ItemListContainer greeting="Lista de Ariculos"/>
    </div>    
  )
}


export default App;