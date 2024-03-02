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


// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { DataProvider } from './Components/DataProvider/DataProvider';
// import Payment from './pages/Payment/Payment';
// import Auth from './pages/Auth/Auth';
// import Order from './pages/Order/Order';
// import Cart from './pages/Cart/Cart';
// import Landing from './pages/Landing/Landing';
// import Result from './pages/Result/Result';

// function Routing() {
//   // Define your reducer and initial state here

//   return (
//     <Router>
//       <DataProvider reducer={reducer} initialState={initialState}>
//         <Routes>
//           <Route path="/" element={<Landing />} />
//           <Route path="/signin" element={<Auth />} />
//           <Route path="/payments" element={<Payment />} />
//           <Route path="/orders" element={<Order />} />
//           <Route path="/category/:categoryName" element={<Result />} />
//           <Route path="/cart" element={<Cart />} />
//         </Routes>
//       </DataProvider>
//     </Router>
//   );
// }

// export default Routing;