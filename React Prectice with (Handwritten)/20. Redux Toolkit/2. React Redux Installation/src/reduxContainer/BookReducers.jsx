import { buy_book } from "./BookTypes"

const initialState = {
    numberOfBooks: 20
}

const BookReducers = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: return {
            ...state, numberOfBooks : state.initialState - 1
        }
        default: return state
    }
}

export default BookReducers;