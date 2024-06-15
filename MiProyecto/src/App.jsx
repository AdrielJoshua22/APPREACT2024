import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Footer } from './components/Footer/Footer';
import NavBar from './components/Menu/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { CartContainer } from './components/CartContainer/CartContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
 import {  DarkVariantExample } from './components/Carousel/Carousel'; 
import { createContext } from 'react'; 
import { CartContext } from './context/cartContext';

function App() {
const ContextApp = createContext();
console.log(ContextApp)

  return (
    <CartContext.Provider value={{

    }}>
    <Router>
     
      <NavBar />
      <br />
     <DarkVariantExample/> 
     <br />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Hola soy item list container'} />} />
        <Route path='/detail/:pid' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartContainer />} />
      {/*   <Route path='/details' element={<ItemDetaiL/>}/> */}
      </Routes>
      <Footer />
    </Router>
    </CartContext.Provider>
  );
}

export default App;

