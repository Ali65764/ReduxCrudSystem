import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { increament, decrement, increamentAmounth, decrementAmounth, resetCount } from '../reduxs/slices/CounterSlice';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector(state=>state.counter.count);

    const [inputValue,setInputValue] = useState(0);

    const handleInputChange =(e)=>{
      setInputValue(Number(e.target.value))
    };  

    const handleAdd =()=>{
      dispatch(increamentAmounth(inputValue))
      setInputValue(0)
    };

    const handleSubtract =()=>{
      dispatch(decrementAmounth(inputValue))
      setInputValue(0)
    }
    const handleReset =()=>{
      dispatch(resetCount())
      setInputValue(0)
    }

  return (
    <>
      <NavBar />
      <div className='text-center'>
        <div className='text-4xl font-semibold mt-7'>
          <p>Count: {count} </p>  
        </div>
        <div className='flex justify-center mt-10'>
          <div>
            <button 
              className='bg-red-600 text-white rounded p-3 mt-1' 
              onClick={()=>dispatch(decrement())}
            >
              <FiMinus />
            </button>
          </div>
          <div >
            <input 
              className='mx-6 rounded-md py-3' 
              type="number" 
              value={inputValue}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <button 
              className='bg-sky-500 text-white rounded p-3 mt-1' 
              onClick={()=>dispatch(increament())}
            >
              <FaPlus />
            </button>
          </div>
        </div>
        <div className='mt-10 text-white'>
          <button 
            className='bg-red-600 p-4 rounded' 
            onClick={handleSubtract}
          >
            Subtract
          </button>
          <button 
            className='mx-7 bg-yellow-500 rounded p-4' 
            onClick={handleReset}
          >
            Reset
          </button>
          <button 
            className='bg-sky-500 rounded p-4' 
            onClick={handleAdd}
            
          >
            Add
          </button>
        </div>
      </div>
    </>
  )
}

export default Counter;
