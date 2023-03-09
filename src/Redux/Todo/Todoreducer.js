import { ADDTODO, COLORCHANGE, COMPLETEALL, COMPLETEDCLEARALL, DELETETODO, TOOGLECOM } from "./actiontypes";
import initialState from "./initialState";

const Nextodo=(todo)=>{
    const nextid=todo.reduce((pv,cv)=>Math.max(cv.id,pv),0)
    return nextid+1
}

const Todoreducer =(state=initialState,action)=>{
    switch (action.type){
        case ADDTODO:
        return [
            ...state,
            {
                id:Nextodo(state),
                text:action.payload,
                completed:false,
            }
        ]
    case TOOGLECOM:
        return state.map(t=>{
            if(t.id !== action.payload) return t
            return {
                ...t,
                completed:!t.completed

            }
        })
    case COLORCHANGE:
        const {colorid,colorc}=action.payload
        return state.map(t=>{
            if(t.id !== colorid) return t
            return {
                ...t,
                color:colorc,
            }

        })
    case DELETETODO:
    return state.filter(t=>t.id !== action.payload)
    case COMPLETEALL:
    return state.map(t=>{
        return {
            ...t,
            completed:true,
        }
    })
    case COMPLETEDCLEARALL:
        return state.filter(t=>!t.completed)
        default:
           return state
    }
}

export default Todoreducer;