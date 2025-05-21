import {INCREMENT, DECREMENT} from './ActionTypes';

const increment = () => {
    return {
        type: INCREMENT
    }
}

const decrement = () => {
    return {
        type: DECREMENT
    }
}

export {increment, decrement}