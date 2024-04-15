import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Footer } from './components/Footer/Footer'
import NavBar from './components/Menu/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <NavBar/>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Este es mi portafolio React 2024</h1>
      <div className="card">
       {/*  <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
       
        </p>
      </div>
      <p className="read-the-docs">
        
      </p>
      <Footer/>
    </>
  )
}

export default App