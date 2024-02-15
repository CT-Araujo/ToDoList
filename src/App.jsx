import { useState } from 'react'
import NavBar from './components/navbar/Navbar'
import Main from './components/Main/Main'
import HeaderPage from './components/Header/HeaderPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HeaderPage/>
      <Main/>
      <NavBar/> 
    </div>
  )
}

export default App
