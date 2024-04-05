// import React from 'react'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import Payment from './pages/Payment/Payment'
// import Auth from './pages/Auth/Auth'
// import Order from './pages/Order/Order'
// import Cart from './pages/Cart/Cart'
// import Landing from './pages/Landing/Landing'
// import Result from './pages/Result/Result'

// function Routing() {
//   return (
//     <Router>
//       <Routes>
//         <Route path='/' element={<Landing />} />
//         <Route path='/signin' element={<Auth />} />
//         <Route path='/payments' element={<Payment />} />
//         <Route path='/orders' element={<Order />} />
//         <Route path='/category/:categoryName' element={<Result />} />
//         <Route path='/cart' element={<Cart />} />
//       </Routes>
//     </Router>
//   )
// }

// export default Routing

// // import React from 'react';
// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { DataProvider } from './Components/DataProvider/DataProvider';
// // import Payment from './pages/Payment/Payment';
// // import Auth from './pages/Auth/Auth';
// // import Order from './pages/Order/Order';
// // import Cart from './pages/Cart/Cart';
// // import Landing from './pages/Landing/Landing';
// // import Result from './pages/Result/Result';

// // function Routing() {
// //   // Define your reducer and initial state here

// //   return (
// //     <Router>
// //       <DataProvider reducer={reducer} initialState={initialState}>
// //         <Routes>
// //           <Route path="/" element={<Landing />} />
// //           <Route path="/signin" element={<Auth />} />
// //           <Route path="/payments" element={<Payment />} />
// //           <Route path="/orders" element={<Order />} />
// //           <Route path="/category/:categoryName" element={<Result />} />
// //           <Route path="/cart" element={<Cart />} />
// //         </Routes>
// //       </DataProvider>
// //     </Router>
// //   );
// // }

// // export default Routing;

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Auth from "./pages/Auth/Auth";
import Payment from "./pages/Payment/Payment";
import Orders from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
import Results from "./pages/Result/Result";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

const stripePromise = loadStripe(
  "pk_test_51P1wZDRw0n10AZS4OT6aiZrVAF8gXmz2Tzv3PUQ9gdFoF5UHQpVmjdws1Tbd0JIUIqwr3cXPEAgLjyDYQMx4Pv6400hapRYP8v"
);
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to access your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
