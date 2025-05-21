import { INCREMENT, DECREMENT } from './ActionType';

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

export  { IncrementAction, DecrementAction }