import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorstadus, staduschange } from '../Redux/Filter/action';

const numberoftodo=(number_of_todo)=>{
    switch (number_of_todo) {
        case 0:
            return  'no task'
        case 1:
            return '1 task left'   
        default:
           return `${number_of_todo} tasks left`
    }
}

const Footder = () => {
    const todoall=useSelector(state=>state.todo)
    const rammingtask=todoall.filter(t=>!t.completed).length
    const filterlist=useSelector(state=>state.filter)
    const dispach=useDispatch()
    const {stadus,colors}=filterlist
    const handlecolorchange=(color)=>{
        if(colors.includes(color)){
            dispach(colorstadus(color,'removed'))
        }else{
            dispach(colorstadus(color,'added'))
        }
    }
    return (
        <div class="mt-4 flex justify-between text-xs text-gray-500">
                    <p>{numberoftodo(rammingtask)}</p>
                    <ul class="flex space-x-1 items-center text-xs">
                        <li class={`cursor-pointer ${stadus === 'all' && 'font-bold'}`}
                        onClick={()=>dispach(staduschange('all'))}
                        >All</li>
                        <li>|</li>
                        <li class={`cursor-pointer ${stadus === 'incompleted' && 'font-bold'}`}
                        onClick={()=>dispach(staduschange('incompleted'))}
                        >Incomplete</li>
                        <li>|</li>
                        <li class={`cursor-pointer ${stadus === 'complete' && 'font-bold'}`}
                         onClick={()=>dispach(staduschange('complete'))}
                        >Complete</li>
                        <li></li>
                        <li></li>
                        <li
                            class={`h-3 w-3 border-2 border-green-500  rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'} `}
                            onClick={()=>handlecolorchange('green')}
                        ></li>
                        <li
                            class={`h-3 w-3 border-2 border-red-500  rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
                            onClick={()=>handlecolorchange('red')}
                        ></li>
                        <li
                            class={`h-3 w-3 border-2 border-yellow-500  rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
                            onClick={()=>handlecolorchange('yellow')}
                        ></li>
                    </ul>
                </div>
    );
};

export default Footder;