import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

export default function Cart() {

    const selector=useSelector((state)=>state.cart.items);
    console.log(selector);

  return (
    <div className="cart"> 
    <Link to="/cart">
      <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="Cart" />
      <span className="cart-count">{selector.length}</span>
    </Link>
    </div>
  )
}
