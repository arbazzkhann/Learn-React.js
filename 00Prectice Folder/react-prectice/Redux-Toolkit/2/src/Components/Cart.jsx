import React from "react";

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../Features/Cart/CartSlice'


const Cart = () => {
  const cartCount = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();

  return (
    <div>
        <h1>{cartCount}</h1>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Cart;
