import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemCount} from "./components/ItemCount/ItemCount"


function App() {
  return (        
    <div>
      <NavBar/>
      <ItemListContainer greeting="Lista de Ariculos"/>
      <ItemCount stock={5} initial={1} onAdd={1} />
    </div>    
  )
}


export default App;