import React, { useState } from 'react';
import img1 from '../images/notes.png'
import img2 from '../images/double-tick.png'
import img3 from '../images/plus.png'
import { useDispatch } from 'react-redux';
import { addtodo, completedall, completedclear } from '../Redux/Todo/action';

const Fromh = () => {
    const [todo,setodo]=useState('')
    const dispach=useDispatch()
    const handlefrom=(e)=>{
        e.preventDefault()
        dispach(addtodo(todo))
        
    }
    //action completed all
    const handlecompleted=()=>{
        dispach(completedall())
    }
    // action completed clear
    const handleclearcom=()=>{
        dispach(completedclear())

    }
    return (
        <div>
        <form
           onSubmit={handlefrom}
            class="flex items-center bg-gray-100 px-4 py-4 rounded-md"
        >
            <img
                src={img1}
                class="w-6 h-6"
                alt="Add todo"
            />
            <input
                type="text"
                placeholder="Type your todo"
                class="w-full text-lg px-4 py-1 border-none outline-none bg-gray-100 text-gray-500"
                onChange={e=>setodo(e.target.value)}
            />
            <button
                type="submit"
                class={`appearance-none w-8 h-8 bg-[url(${img3})] bg-no-repeat bg-contain`}
            ></button>
        </form>

        <ul class="flex justify-between my-4 text-xs text-gray-500">
            <li class="flex space-x-1 cursor-pointer"
            onClick={()=>handlecompleted()}
            >
                <img
                    class="w-4 h-4"
                    src={img2}
                    alt="Complete"
                />
                <span>Complete All Tasks</span>
            </li>
            <li class="cursor-pointer"
            onClick={()=>handleclearcom()}
            >Clear completed</li>
        </ul>
    </div>
    );
};

export default Fromh;