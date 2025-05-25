import { INCREMENT, DECREMENT } from './ActionTypes';
import { INCREMENT2, DECREMENT2 } from './ActionTypes';

const initialState = {
    count: 10,
    count2: 20
}

const Reducers = (state = initialState, actions) => {
    switch(actions.type) {
        case INCREMENT : return {
            ...state,
            count: state.count + 1
        }
        case DECREMENT : return {
            ...state,
            count: state.count - 1
        }
        case INCREMENT2 : return {
            ...state,
            count2: state.count2 + 10
        }
        case DECREMENT2 : return {
            ...state,
            count2: state.count2 - 10
        }
        default: return state
    }
}

export default Reducers;