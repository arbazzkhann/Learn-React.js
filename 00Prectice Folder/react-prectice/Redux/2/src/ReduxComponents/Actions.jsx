import {INCREMENT, DECREMENT} from './ActionTypes';

const incrementAction = () => {
    return {
        type: INCREMENT
    }
}

const decrementAction = () => {
    return {
        type: DECREMENT
    }
}

export {incrementAction, decrementAction};