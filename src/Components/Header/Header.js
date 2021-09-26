import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="main">
      <div className="con">
        <h1 className="logo">e-Commerce Shop</h1>
        <nav className="menu">
          <a href="/shop">Shop</a>
          <a href="/review">Order Review</a>
          <a href="/inventory">Manage Inventory</a>
        </nav>
      </div>
    </div>
  );
};

export default Header;
