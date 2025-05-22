import { INCREMENT, DECREMENT } from './ActionsTypes';

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

export { IncrementAction, DecrementAction }