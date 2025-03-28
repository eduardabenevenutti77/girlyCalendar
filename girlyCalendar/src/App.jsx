import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import LoginPage from "./pages/loginPage/loginPage"
import './App.css'
import CadastroPage from './pages/cadastroPage/cadastroPage'
import Inicial from './pages/paginaInicial/Inicial'
import Login from './components/login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/cadastro" element={<CadastroPage />} />
        <Route path='/inicio' element={<Inicial />} />
      </Routes>
      {/* <LoginPage /> */}
    </>
  )
}

export default App
