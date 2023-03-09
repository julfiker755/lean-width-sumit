import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Rootreducer from "./Rootreducer";


const store =createStore(Rootreducer,composeWithDevTools())

export default store;