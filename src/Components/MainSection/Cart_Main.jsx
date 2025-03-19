import React from "react";

const Cart_Main = ({type,total_number}) => {
  return (
    <div className="cart-main">
      <div className="cart-main-container">
        <div className="number">
          <span>{total_number}+</span>
        </div>
        <div className="cart-title">
          <span>{type}</span>
          <p>Made projects on HTML,css and vanilla js, dsa specific projects , networking projects</p>
        </div>
      </div>
      <div className="callToAction">
        <button className="btn-action">Explore</button>
      </div>
    </div>
  );
};

export default Cart_Main;
