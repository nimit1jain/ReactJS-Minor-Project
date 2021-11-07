import React from 'react'
import './App.css';
// import { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './my_components/Navbar';
import Home from './my_components/Home';
import Contact from './my_components/Contact'
import Footer from './my_components/Footer';
import About from './my_components/About';
import Services from './my_components/Services';
import Products from './my_components/Products';
// var Navbar = require('./my_components/Navbar').default
// var Home = require('./my_components/Home').default
// var Contact = require('./my_components/Contact').default
// var Footer = require('./my_components/Footer').default
// var Services = require('./my_components/Services').default
// var Products = require('./my_components/Products').default
// var About = require('./my_components/About').default


const App=()=> {
  return (
    <>
      
      <Navbar/>
       
     
        <Switch>
          
          {/* <Route exact path="/about" component={<About/>}/> */}
            <Route path="/about">
              <About/>
              </Route>
          
          {/* <Route exact path="/services" component={<Services/>}/> */}
          <Route path="/services">
              <Services/>
              </Route>
          
          
          {/* <Route exact path="/products" component={<Products/>}/> */}
          <Route path="/products">
              <Products/>
              </Route>
          
          
         
          {/* <Route exact path="/contact" component={<Contact/>}/> */} 
          <Route path="/contact">
              <Contact/>
              </Route>

          {/* <Route path='/' element={<Home/>} /> */}
          <Route exact path="/">
              <Home/>
              </Route>
              
        </Switch>
        <Footer/>
        
      
   </>
  )
};

export default App;

