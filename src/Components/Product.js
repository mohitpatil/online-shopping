import React, { Component } from "react";
import storeProducts from "../data";

class Product extends Component {
  state = {
    products: storeProducts
  };

  render() {
    return (
      <div className="card" style={{ width: "18rm" }}>
        <img src="" className="card-img-top" alt="productImage" />
        <div className="card-body">
          <p className="card-text">Product Name</p>
        </div>
      </div>
    );
  }
}

export default Product;
