
import './App.css'
import { Footer } from './components/Footer/Footer'
/* import { Contador } from './components/contador/contador' */
import NavBar from './components/Menu/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'



function App() {


  return (
    <>

      <NavBar />
      <br />
      <ItemListContainer />
      <br />
      <Footer />
    </>
  )
}

export default App