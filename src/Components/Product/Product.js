import React from "react";
import "./Product.css";

const Product = (props) => {
  //   console.log(props);
  const { img, name, seller, stock, category, price } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-detail">
        <h2>{name}</h2>
        <p>By : {seller}</p>
        <p>{category}</p>
        <h2>$ {price}</h2>
        <p>only {stock} left in stock - order soon</p>
        <ul>
          <li></li>
        </ul>
        <button onClick={() => props.handleAddToCart(props.product)}>
          add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
