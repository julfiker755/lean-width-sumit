import React, { useState } from 'react';
import Frame from '../img/icons/Frame.svg'
import Vector3 from '../img/icons/Vector (3).svg'
import Vector1 from '../img/icons/Vector (1).svg'
import { useDispatch, useSelector } from 'react-redux';
import { Booking } from './Redux/Addlist/action';
const FightInput = () => {
    const [destinationfrom,setdestinationfrom]=useState('')
    const [destinationtonto,setdestinationto]=useState('')
    const [datee,setdate]=useState('')
    const [guests,setguests]=useState('')
    const [classs,setclasss]=useState('')
    const dispach=useDispatch()
    const Bookingdata=useSelector((state)=>state.items)
    console.log(Bookingdata.length)
      function Handlefrom(e){
        e.preventDefault()
        const data={
            id:Math.floor(Math.random()*10000000),
            Destinationfrom:destinationfrom,
            Destinationtonto:destinationtonto,
            Datee:datee,
            Guests:guests,
            Classs:classs,
    }
      dispach(Booking(data))
      }
            
    return (
        <div className="mt-[160px] mx-4 md:mt-[160px] relative">
      <div className="bg-white rounded-md max-w-6xl w-full mx-auto">
        <form onSubmit={Handlefrom} className="first-hero lws-inputform">
          {/* <!-- From --> */}
          <div className="des-from">
            <p>Destination From</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select onChange={(e)=>setdestinationfrom(e.target.value)} className="outline-none px-2 py-2 w-full" name="from" id="lws-from" required>
                <option value=""  hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- To --> */}
          <div className="des-from">
            <p>Destination To</p>
            <div className="flex flex-row">
              <img src={Frame} alt="" />
              <select onChange={(e)=>setdestinationto(e.target.value)} className="outline-none px-2 py-2 w-full" name="to" id="lws-to" required>
                <option value="" hidden>Please Select</option>
                <option>Dhaka</option>
                <option>Sylhet</option>
                <option>Saidpur</option>
                <option>Cox's Bazar</option>
              </select>
            </div>
          </div>

          {/* <!-- Date --> */}
          <div className="des-from">
            <p>Journey Date</p>
            <input onChange={(e)=>setdate(e.target.value)} type="date" className="outline-none px-2 py-2 w-full date" name="date" id="lws-date" required />
          </div>

          {/* <!-- Guests --> */}
          <div className="des-from">
            <p>Guests</p>
            <div className="flex flex-row">
              <img src={Vector1} alt="" />
              <select onChange={(e)=>setguests(e.target.value)} className="outline-none px-2 py-2 w-full" name="guests" id="lws-guests" required>
                <option value="" hidden>Please Select</option>
                <option value="1">1 Person</option>
                <option value="2">2 Persons</option>
                <option value="3">3 Persons</option>
                <option value="4">4 Persons</option>
              </select>
            </div>
          </div>

          {/* <!-- Class --> */}
          <div className="des-from !border-r-0">
            <p>Class</p>
            <div className="flex flex-row">
              <img src={Vector3} alt="" />
              <select onChange={(e)=>setclasss(e.target.value)} className="outline-none px-2 py-2 w-full" name="ticketClass" id="lws-ticketClass" required>
                <option value="" hidden>Please Select</option>
                <option>Business</option>
                <option>Economy</option>
              </select>
            </div>
          </div>
        {/* <!-- booking button --> */}
        {Bookingdata.length === 3 ?  <button className="addCity disabled:opacity-75" type="submit" id="lws-addCity" disabled>
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button>: <button className="addCity disabled:opacity-75" type="submit" id="lws-addCity">
            <svg width="15px" height="15px" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            <span className="text-sm">Book</span>
          </button> }
         
         
        </form>
      </div>
    </div>
    );
};

export default FightInput;