import './App.css';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import Producto from './Components/Producto';

function App() {
  return (
    <div>
      <div className="container">
        <NavBar/>
        <ItemListContainer greeting = {"El carrito aún está vacío"} />
        <Producto/>
        <Footer/>
      </div>

    </div>
  )
}

export default App;
