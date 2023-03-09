import { COLORCHANGE, STADUS } from "./actiontypes"

export const staduschange=(stadus)=>{
    return {
        type:STADUS,
        payload:stadus,
    }
}

export const colorstadus=(color,colorchange)=>{
    return {
        type:COLORCHANGE,
        payload:{color,colorchange}
    }
}