import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";
  import Home from "./Home";
  import Company from "./Company";
  import AboutUs from "./AboutUs";
  import Product from "./Product";
  class Main extends Component {
    render() {
      return (
        <HashRouter>
          <div class="mymainpage">
          
            <ul className="header">
            <li><NavLink class="" exact to="/">Home</NavLink></li>
          
            
            <li><NavLink to="/Product">Product</NavLink></li>
            <div class="dropdown">
  <button class="dropbtn">AboutUs</button>
  <div class="dropdown-content">
  <li><NavLink to="/Company">Company</NavLink></li>
    
  </div>
</div>

            </ul>
            <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/Company" component={Company}/>
            <Route path="/AboutUs" component={AboutUs}/>
            <Route path="/Product" component={Product}/>
            </div>
          </div>
        </HashRouter>
      );
    }
  }
 
export default Main;