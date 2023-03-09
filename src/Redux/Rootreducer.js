import { combineReducers } from 'redux';
import Filtereducer from './Filter/Filtereducer';
import Todoreducer from './Todo/Todoreducer';

const Rootreducer=combineReducers({
    todo:Todoreducer,
    filter:Filtereducer,
})
export default Rootreducer;