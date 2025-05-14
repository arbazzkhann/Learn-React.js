import { createStore } from 'redux'
import bookReducer from './Reducers'

const Store = createStore(bookReducer);

export default Store

