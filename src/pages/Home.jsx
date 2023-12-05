import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import YearOptions from '../components/YearOptions';
import Header from '../components/Header';

function Home() {
    const [option,setOption] = useState(false);
  return (
    <div className=' w-full'>
      <Header/>
    <ToastContainer/>
    <div className=' fixed flex justify-center w-full'>
        <div>
        {option?<YearOptions display={(val)=>setOption(val)} action={option}/>:null}
        </div>
    </div>
    <div className=' w-full flex flex-col justify-center items-center mt-10'>
    <p>Welcome to Virtual Attendance</p>
    <button className=' px-2 py-1 m-2 bg-blue-500 rounded-md'
    onClick={()=>setOption("viewattendance")}
    >Cheack Attendance</button>
    </div>
    </div>

  )
}

export default Home