import { INCREMENT, DECREMENT, INCREMENT2, DECREMENT2 } from './ActionsTypes';

const initialCount = {
    count: 20,
    count2: 10
}

const Reducers = (state = initialCount, actions) => {
    switch (actions.type) {
        case INCREMENT: return {
            ...state, 
            count: state.count + 1
        }
        case DECREMENT: return {
            ...state, 
            count: state.count - 1
        }
        default: return state
        case INCREMENT2: return {
            ...state,
            count2: state.count2 + 1
        }
        case DECREMENT2: return {
            ...state,
            count2: state.count2 - 1
        }
    }
}

export default Reducers;