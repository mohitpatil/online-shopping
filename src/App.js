import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Header from "./Components/Header";
import ProductList from "./Components/ProductList";
import ProductDetails from "./Components/ProductDetails";
import Default from "./Components/default";
import Cart from "./Components/Cart";

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
      <Route exact path="/" component={ProductList}/>
      <Route exact path="/details" component={ProductDetails} />
      <Route exact path="/cart" component={Cart} />
      <Route component={Default} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
