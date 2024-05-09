import {BrowserRouter} from 'react-router-dom'
import './App.css'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/Menu/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { CartContainer } from './components/contador/CartContainer/CartContainer'



function App() {

  return (
    <BrowserRouter>
        <NavBar />
          <br/>
           <ItemListContainer />
           <CartContainer />
          <br />
      <Footer />
    </BrowserRouter>
  )
}

export default App