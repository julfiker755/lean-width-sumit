import React from 'react';
import { useSelector } from 'react-redux';
import Todocard from './Todocard';

const Todo = () => {
    const todoall=useSelector(state=>state.todo)
    const filters=useSelector(state=>state.filter)
    return (
        <div
            class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto"
        >
            {/* <!-- todo --> */}
             {todoall
             .filter(todo=>{
                const {stadus}=filters
                switch (stadus) {
                    case 'complete':
                    return todo.completed
                    case 'incompleted':
                        return !todo.completed
                    default:
                       return  true
                }

             })
             .filter(todo=>{
                const {colors}=filters
                if(colors.length > 0){
                     return colors.includes(todo?.color)
                }
                return true
             })
             .map(todo=><Todocard key={todo.id} todo={todo}></Todocard>)}
        </div>
    );
};

export default Todo;