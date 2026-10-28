import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Herosection from '../pages/Herosection'
import About from '../pages/About'
import Works from '../pages/Works'

function LayoutRoutes() {
  return (
   <BrowserRouter>

   <Routes>

    <Route path='/' element={<Herosection/>}></Route>
     <Route path='/about' element={<About/>}></Route>
     <Route path='/works' element={<Works/>}></Route>

   </Routes>

   </BrowserRouter>
  )
}

export default LayoutRoutes
