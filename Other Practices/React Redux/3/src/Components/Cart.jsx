import React from 'react'

import { useSelector } from 'react-redux'

import { getItemSelector } from '../redux/slices/cartSlice';

const Cart = () => {
    const items = useSelector(getItemSelector);
    console.log("Items: " , items);

    const totalPrice = items.reduce((a, b) => a + b.price, 0);

  return (
    <div>
        Total Products: {items.length} and Price: {totalPrice}
    </div>
  )
}

export default Cart