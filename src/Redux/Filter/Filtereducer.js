import { COLORCHANGE, STADUS } from "./actiontypes";
import initialState from "./initialState";


const Filtereducer = (state=initialState,action) => {
    switch (action.type) {
        case STADUS:
         return {
            ...state,
            stadus:action.payload,
         }
        case COLORCHANGE:
        const {color,colorchange}=action.payload
        switch (colorchange) {
            case 'added':
             return {
                ...state,
                colors:[
                    ...state.colors,
                    color]
             }
            case 'removed':
            return {
                ...state,
                colors:state.colors.filter(exsicolor=>exsicolor !== color)
            }
        
            default:
               return state
        }
        default:
            return state
    }

    
};

export default Filtereducer;