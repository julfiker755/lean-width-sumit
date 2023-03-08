import {createStore} from 'redux';
import bookReducer from './Addlist/bookReducer';

const store=createStore(bookReducer)

 export default store;