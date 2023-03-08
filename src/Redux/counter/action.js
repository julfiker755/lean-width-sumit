import { DECREMENT, INCREMENT } from "./actiontypes"


export const increment=()=>{
    return {
        type:INCREMENT,
    }
}
export const decrement=()=>{
    return {
        type:DECREMENT,
    }
}