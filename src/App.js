import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>My Cars Sales</h1>
          <ul className="header">
            <li>/*<NavLink to="/">*/Home/*</NavLink>*/</li>
            <li>/*<NavLink to="/">*/List/*</NavLink>*/</li>
          </ul>
          /*<div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/List" component={List}/>
			<Route path="/Luxury" component={Luxury}/>
          </div>*/
        </div>
      </HashRouter>
    );
  }
}

export default Main;
