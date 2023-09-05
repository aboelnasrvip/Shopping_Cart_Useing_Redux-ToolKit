import React from 'react'
import { Routes, Route } from "react-router-dom"

import NavBar from './compoenents/NavBar';
import About from './compoenents/About';
import Product from './compoenents/Product';
import Cart from './compoenents/Cart'
const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Product/>} />
        <Route path='about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App;