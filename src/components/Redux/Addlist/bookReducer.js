import {BOOK, REMOVE} from "./actiontypes";

const initialState={
    items:[],
}
const bookReducer=(state=initialState,action)=>{
    switch(action.type) {
        case BOOK:
            return {
                ...state,
                items: [ action.payload,...state.items]
              }
        case REMOVE: 
        const updateitem=state.items.filter(item=>item.id !== action.payload)
        return {...state,items:updateitem}
        default:
         return state
      }
}
export default bookReducer;