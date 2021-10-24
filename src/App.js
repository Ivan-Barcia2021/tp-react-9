import React from "react";
import "./style.css";

const BrowserRouter = require("react-router-dom").BrowserRouter;
const Router = require("react-router-dom").Router;
const Link=require("react-router-dom").Link;
const Route = require("react-router-dom").Route;
import Detalle from './Detalle';
import Listado from './Listado';
import Home from './Home'
export default function App() {
  return (
    <BrowserRouter>
 
    
 
    <div className="container">

      <div className="btn-group">
        <Link to="/listado" className="btn btn-dark">
          Listado
          </Link>
        </div>
        <div className="btn-group">
        <Link to="/detalle" className="btn btn-dark">
          Detalle
          </Link>
        </div>
        <div className="btn-group">
        <Link to="/home" className="btn btn-dark">
       Ver Posts
          </Link>
        </div>
    </div>
    <Route path="/listado" excact>
      <Listado/>
    </Route>
    
    <Route path="/detalle" excact>
      <Detalle/>
    </Route>
    <Route path="/home" excact>
      <Home/>
    </Route>
    </BrowserRouter>
  );
}
