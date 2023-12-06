import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function YearOptions({display,action}) {
    const navigate = useNavigate()
    const [val,setVal] = useState()
    const onCng = (event)=>{
        setVal(event.value)
    }
    const handleClick = ()=>{
        if(val && val != "Select"){
            console.log(val,action);
            switch(action){
                case "addstudent": navigate(`/${val}/add-student`)
                break;
                case "takeattendance": navigate(`/${val}/attendance`)
                break;
                default: navigate(`/${val}/view-attendance`)
            }
        }else{
            toast("Please select the year")
        }
    }
  return (
    <div className='  p-3 w-[250px] max-w-sm bg-gradient-to-tl to-indigo-400 from-blue-900 backdrop-blur-lg flex flex-col items-center rounded-md text-blue-900 mt-2 shadow-lg shadow-indigo-900'>
        <ToastContainer/>
        <h4 className=' text-lg font-semibold text-white'>Choose the Year</h4>
        <select className=' w-full mt-3 p-2 rounded-md outline-none' onChange={(e)=>onCng(e.target)}>
            <option>Select</option>
            <option value="firstyear">1st year</option>
            <option value="secondyear">2nd year</option>
            <option value="thirdyear">3rd year</option>
            <option value="fourthyear">4th year</option>
        </select>
        <div>
        <button className='mt-3 py-1 px-2 mx-2 rounded-md bg-slate-100' onClick={()=>display(false)}>Cancel</button>
        <button className='mt-3 py-1 px-2 bg-yellow-500 rounded-md' onClick={handleClick}>Done</button>
        </div>
    </div>
  )
}

export default YearOptions