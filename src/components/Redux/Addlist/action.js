import {BOOK, REMOVE} from "./actiontypes"

export const Booking=(data)=>{
    return {
        type:BOOK,
        payload:data,
    }
}

export const Remove=(data)=>{
    return {
        type:REMOVE,
        payload:data,
    }
}