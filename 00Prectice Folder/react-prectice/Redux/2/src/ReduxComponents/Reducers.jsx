import {INCREMENT, DECREMENT} from './ActionTypes';

const initialState = {
    count: 0
}

const Reducers = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT: 
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT: 
            return {
                ...state,
                count: state.count - 1
            }
        default: return state;
    }
}

export default Reducers;