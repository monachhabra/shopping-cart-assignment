import React from "react";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Product from "./Pages/Product/Product";
import ImageCarousel from "./Components/Carousel/ImageCarousel";
import Products from "./Components/Products/Products";
import Footer from "./Components/Footer/Footer";
import CardComponent from "./Pages/Product/CardComponent";


function App() {
  return (
    <div className="App">
        {/* <Login/>
       <Register/> */}
       <Router>
        <Header/>
          <Switch>
            <Route exact path="/signin" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/" component={Home} />
            <Route exact path="/product" component={Product}/>
            {/* 
            <Route exact path="/cart" render={(props) => <RequireAuth Component={Cart} {...props} />} />
            <Route path="*" exact={true} component={NotFound} /> */}
          </Switch>
          <Footer/>
        </Router>
        {/* <ImageCarousel/> */}
        {/* <Product/> */}
        {/* <Product/> */}
     
    </div>
  );
}

export default App;
