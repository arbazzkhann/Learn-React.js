import { INCREMENT, DECREMENT } from './ActionsTypes';

const initialCount = {
    count: 20
}

const Reducers = (state = initialCount, actions) => {
    switch (actions.type) {
        case INCREMENT: return {
            ...state, count: state.count + 1
        }
        case DECREMENT: return {
            ...state, count: state.count - 1
        }
        default: return state
    }
}

export default Reducers;