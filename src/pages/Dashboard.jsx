import React, { useState } from 'react'
import YearOptions from '../components/YearOptions';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logout from '../components/Logout';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../components/Logo';
import { useSelector } from 'react-redux';

function Dashboard() {
    const userData = useSelector(state=>state.auth.authData)
    const navigate = useNavigate()
    const [option,setOption] = useState(false);
    const showOption = (val)=>setOption(val)
    const handleClick = (mes)=>{
        setOption(mes)
    }
    return(
        <div className=' min-h-screen bg-white'>
        <ToastContainer/>
        <header className=' flex justify-between p-2 bg-blue-900 shadow-md shadow-indigo-950 text-white text-md sm:text-lg lg:text-xl'>
            <Logo/>
            <h5>{userData.name || "MRC"}</h5>
        </header>
       <main>
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
       </main>
        </div>
    )
}

export default Dashboard