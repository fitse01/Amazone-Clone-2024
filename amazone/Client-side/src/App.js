// import React from 'react';
// import {  Routes, Route } from 'react-router-dom';
// import Payment from './pages/Payment/Payment';
// import SignIn from './pages/Auth/Signup';
// import Order from './pages/Order/Order';
// import Cart from './pages/Cart/Cart';
// import Landing from './pages/Landing/Landing';

// function App() {
//   return (
  
//       <Routes>
//         <Route path="/" element={<Landing />} />
//         <Route path="/auth" element={<SignIn />} />
//         <Route path="/payments" element={<Payment />} />
//         <Route path="/orders" element={<Order />} />
//         <Route path="/cart" element={<Cart />} />
//       </Routes>
  
//   );
// }

// export default App;


// import React from 'react'
// import CarouselEffect from './Components/Carousel/Carousel'
// import Category from './Components/Category/Category'
// import Header from './Components/Header/Header'

// function App() {
//   return (
//       <div>
//           {/* <Header/>
//           <CarouselEffect/>
//           <Category/> */}
          
//       </div>


//   )
// }
// export default App
import React from 'react'
import Routing from "./Router"

function App() {
  return (
    <div>
      <Routing/>
    </div>
  )
}

export default App