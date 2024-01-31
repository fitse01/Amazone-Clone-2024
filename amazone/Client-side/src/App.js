import './App.css';
import CarouselEffect from './Components/Carousel/Carousel';
import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      < CarouselEffect/>
    </div>
  );
}

export default App;


// npm i react react-dom @trendyol-js/react-carousel --save
// import { SlLocationPin } from "react-icons/sl";

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Carousel } from '@trendyol-js/react-carousel';
// import { Item } from './yourItem';

// ReactDOM.render(
// 	<Carousel>
// 		<Item />
// 		<Item />
// 		<Item />
// 		<Item />
// 	</Carousel>,
// 	document.getElementById('root'),
// );