import { useState } from 'react'
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <BrowserRouter>

        <div className="container">
          <Routes>

            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>

          </Routes>
        </div>

      </BrowserRouter>
    </div>
  )
}

export default App
