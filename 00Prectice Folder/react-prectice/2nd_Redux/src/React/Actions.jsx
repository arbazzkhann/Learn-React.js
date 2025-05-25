import { INCREMENT, DECREMENT } from './ActionTypes';
import { INCREMENT2, DECREMENT2 } from './ActionTypes';

const IncrementAction = () => {
    return {
        type: INCREMENT
    }
}
const DecrementAction = () => {
    return {
        type: DECREMENT
    }
}
const IncrementAction2 = () => {
    return {
        type: INCREMENT2
    }
}
const DecrementAction2 = () => {
    return {
        type: DECREMENT2
    }
}

export { IncrementAction, DecrementAction, IncrementAction2, DecrementAction2 }