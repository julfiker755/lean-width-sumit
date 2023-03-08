import { applyMiddleware, createStore } from "redux";
import Rootreducer from "./Rootreducer";
import logger from 'redux-logger'
import { composeWithDevTools } from "redux-devtools-extension";

// create apply middleware
// const mylogger=(store)=>(next)=>(action)=>{
//  console.log(`action: ${JSON.stringify(action)}`)
//  console.log(`Before: ${JSON.stringify(store.getState())}`)
// //  upcameing state
// const upcomeingstate=[action].reduce(Rootreducer,store.getState())
// console.log(JSON.stringify(upcomeingstate))
// // pass action
// return next(action)
// }


const store = createStore(Rootreducer,composeWithDevTools(applyMiddleware(logger)))

export default store;