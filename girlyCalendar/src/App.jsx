import { useState } from 'react'
import { Route, Routes, useLocation } from "react-router-dom"
import LoginPage from "./pages/loginPage/loginPage"
import './App.css'
import CadastroPage from './pages/cadastroPage/cadastroPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<CadastroPage />} />
      </Routes>
      {/* <LoginPage /> */}
    </>
  )
}

export default App
