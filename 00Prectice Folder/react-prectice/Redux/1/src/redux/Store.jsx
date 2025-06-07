import { createStore } from 'redux';
import CountReducers from './Reducers';

export const store = createStore(CountReducers)
