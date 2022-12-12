import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import ItemDetailContainer from './Components/ItemDetailContainer';
import Error404 from './Components/Error404';

function App() {
  return (
    <div>
      <BrowserRouter >
        <NavBar/>
        <Routes>
          <Route path={"/"} element={<ItemListContainer/>} />
          <Route path={"/Category/:id"} element={<ItemListContainer/>} />
          <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
          <Route path={"*"} element={<Error404/>} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App;
