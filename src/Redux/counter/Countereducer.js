import { DECREMENT, INCREMENT } from "./actiontypes"


const initialState={
    value:10
}

const Countereducer=(state=initialState,action)=>{
    switch (action.type) {
        case INCREMENT:
          return {
            ...state,
            value:state.value+1
          }
        case DECREMENT:
         return {
            ...state,
            value:state.value-1
         }
    
        default:
            return state
    }

}
export default Countereducer