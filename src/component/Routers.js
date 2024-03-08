import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from "../component/Home"
import About from "../component/About"

const Routers = () => {
  return (
    <div>
    <Routes>
        <Route path='/home'   element={<Home/>}  />
        <Route path='/about'   element={<About/>}  />
    </Routes>
    
    
    </div>
  )
}

export default Routers