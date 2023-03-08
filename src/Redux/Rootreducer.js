import { combineReducers } from "redux";
import Countereducer from "./counter/Countereducer";
import Dynamicreducer from "./Dynamic/Dynamicreducer";




const Rootreducer =combineReducers({
    counter:Countereducer,
    dynamicounter:Dynamicreducer,
})

export default Rootreducer;