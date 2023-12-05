import React, { useState } from 'react'
import YearOptions from '../components/YearOptions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from '../components/Logout';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {
    const navigate = useNavigate()
    const [option,setOption] = useState(false);
    const showOption = (val)=>setOption(val)
    const handleClick = (mes)=>{
        setOption(mes)
    }
    return(
        <>
        <ToastContainer/>
        <div>
            {option?(<div className=' fixed w-full flex justify-center'>
                <div>
                <YearOptions display={showOption} action={option}/>
                </div>
            </div>):null}
            <button onClick={()=>navigate("/add-member")} className=' px-3 py-1 bg-blue-400 m-4 rounded-md text-white'>Add new member</button>
            <button onClick={()=>handleClick("addstudent")} className=' px-3 py-1 bg-blue-400 m-4 rounded-md text-white'>Add new Students</button>
            <button onClick={()=>handleClick("takeattendance")} className=' px-3 py-1 bg-blue-400 m-4 rounded-md text-white'>Take Today's attendance</button>
        </div>
        <Link to={"/"}>Home</Link>
        <Logout/>
        </>
    )
}

export default Dashboard