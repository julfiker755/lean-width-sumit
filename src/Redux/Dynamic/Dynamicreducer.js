import { increment } from "./action";
import { DECREMENT, INCREMENT } from "./actiontypes";

const initialState={
    value:0,
}
const Dynamicreducer =(state=initialState,action)=>{
     switch (action.type) {
        case INCREMENT:
        return {
            ...state,
            value:state.value +action.payload
        }
        case DECREMENT:
            return {
                ...state,
                value:state.value-action.payload
            }
        default:
         return state
     }
}

export default Dynamicreducer;
