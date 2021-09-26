import React from "react";
import "./Cart.css";

const Cart = (props) => {
  console.log(props);
  const { cartss } = props;
  let total = 0;
  for (const pro of cartss) {
    total = total + pro.price;
  }
  const shipping = 0;
  const totalWithoutTax = total + shipping;
  let tax = totalWithoutTax * 0.1;
  const totalWithTax = totalWithoutTax + tax;

  return (
    <div className="cart">
      <h1>Order Summary</h1>
      <h4>
        Items ordered: <span>{props.cartss.length}</span>
      </h4>
      <table>
        <tr>
          <td>Total :</td>
          <td> $ {total.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Shipping :</td>
          <td> $ {shipping}</td>
        </tr>
        <tr>
          <td>Total without tax :</td>
          <td> $ {totalWithoutTax.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Tax :</td>
          <td> $ {tax.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Total Shopping :</td>
          <td> $ {totalWithTax.toFixed(2)}</td>
        </tr>
      </table>
      <button>Purchase</button>
    </div>
  );
};

export default Cart;
{
  /* <p>Total : {total.toFixed(2)}</p>
      <p>Shipping : $ {shipping}</p>
      <p>Total without tax : $ {totalWithoutTax.toFixed(2)} </p>

      <p>Tax : {tax}</p>
      <p>Total Shopping : $ {totalWithTax.toFixed(2)} </p> */
}
