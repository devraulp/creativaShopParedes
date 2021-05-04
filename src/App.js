import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {ItemListContainer} from "./components/ItemListContainer/ItemListContainer";
import {ItemDetail} from "./components/ItemDetail/ItemDetail"


function App() {
  return (        
    <div>
      <NavBar/>
      <ItemDetail/>
      <ItemListContainer greeting="Lista de Ariculos"/>
    </div>    
  )
}


export default App;