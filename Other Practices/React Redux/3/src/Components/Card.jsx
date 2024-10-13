import React from "react";
import { useDispatch } from "react-redux";
import { addItem }  from '../redux/slices/cartSlice'

const Card = ({ image, productName, productPrice }) => {

  const dispatch = useDispatch();

  return (
      
        <div className="bg-dark p-4 rounded-lg shadow-lg">
          <img src={image} className="w-full h-32 object-cover rounded-t-lg" />
          <div className="p-2">
            <h2 className="text-gray-600 font-bold text-lg">{productName}</h2>
            <p className="text-gray-400">₹{productPrice}</p>
            <button onClick={e => dispatch(addItem({ name: productName, price: productPrice }))} className="mt-2 bg-blue-500 text-white py-1 px-4 rounded">Add to cart</button>
          </div>
        </div>

  );
};

export default Card;
