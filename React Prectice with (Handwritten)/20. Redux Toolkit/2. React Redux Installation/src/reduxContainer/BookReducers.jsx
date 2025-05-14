const buy_book = "buyBook";
const sell_book = "sellBook";

const initialState = {
    numberOfBooks: 20
}

const BookReducers = (state = initialState, action) => {
    switch (action.type) {
        case buy_book: return {
            ...state, numberOfBooks : state.numberOfBooks + 1
        }
        case sell_book: return {
            ...state, numberOfBooks : state.numberOfBooks - 1
        }
        default: return state
    }
}

export default BookReducers;