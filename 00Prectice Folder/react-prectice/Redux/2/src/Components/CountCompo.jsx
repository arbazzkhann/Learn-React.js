import { useDispatch, useSelector } from 'react-redux';
import {incrementAction, decrementAction }from '../ReduxComponents/Actions';

import React from 'react'

const CountCompo = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={() => dispatch(incrementAction())}>Increment</button>
        <button onClick={() => dispatch(decrementAction())}>Decrement</button>
    </div>
  )
}

export default CountCompo