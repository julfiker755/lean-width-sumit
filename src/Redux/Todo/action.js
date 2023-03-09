import { ADDTODO, COLORCHANGE, COMPLETEALL, COMPLETEDCLEARALL, DELETETODO, TOOGLECOM } from "./actiontypes"

export const addtodo=(todoobj)=>{
   return {
     type:ADDTODO,
     payload:todoobj,
   }
}

export const toggletodo=(toggleid)=>{
    return {
        type:TOOGLECOM,
        payload:toggleid,
    }
}
export const colorselect=(colorid,colorc)=>{
    return {
        type:COLORCHANGE,
        payload:{
            colorid,
            colorc
        }
    }
}
export const deletedoto=(deleteid)=>{
    return {
        type:DELETETODO,
        payload:deleteid,
    }
}
export const completedall=()=>{
    return {
        type:COMPLETEALL,
    }
}
export const completedclear=()=>{
    return {
        type:COMPLETEDCLEARALL,
    }
}