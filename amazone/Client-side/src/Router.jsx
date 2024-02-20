import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Payment from './pages/Payment/Payment'
import Auth from './pages/Auth/Auth'
import Order from './pages/Order/Order'
import Cart from './pages/Cart/Cart'
import Landing from './pages/Landing/Landing'
import Result from './pages/Result/Result'

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/signin' element={<Auth />} />
        <Route path='/payments' element={<Payment />} />
        <Route path='/orders' element={<Order />} />
        <Route path='/category/:categoryName' element={<Result />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
  )
}

export default Routing