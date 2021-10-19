import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";
import { BrowserRouter } from "react-router-dom";
import Product from "./Pages/Product/Product";
import ImageCarousel from "./Components/Carousel/ImageCarousel";
import Products from "./Components/Products/Products";


function App() {
  return (
    <div className="App">
        {/* <Login/>
       <Register/> */}
        <BrowserRouter>
         <Header/>
        </BrowserRouter>
        {/* <ImageCarousel/> */}
        {/* <Product/> */}
        {/* <Product/> */}
     
    </div>
  );
}

export default App;
