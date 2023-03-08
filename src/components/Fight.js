import { getByTestId } from '@testing-library/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Fightr from './Fightr';
import { Remove } from './Redux/Addlist/action';

const Fight = () => {
  const dispach=useDispatch()
  const Bookingdata=useSelector((state)=>state.items)
  const Handledelete=(id)=>{
    dispach(Remove(id))
  }
    return (
      <tbody className="divide-y divide-gray-300/20" id="lws-previewBooked">
        {Bookingdata.map(bs=><Fightr key={bs.id} Handledelete={Handledelete} data={bs}></Fightr>)}
        </tbody>
    );
};

export default Fight;