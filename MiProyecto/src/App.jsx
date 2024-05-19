import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/Menu/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContainer } from './components/CartContainer/CartContainer'
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <Router>
      <NavBar />
        <Routes>
        <Route path='/' element={<ItemListContainer gretting={'Hola soy item list container'}/>}/>
        <Route path='/detail/:pid' element={<ItemDetailContainer/>}/>
        <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
      <Footer />
    </Router>
  )
}

export default App