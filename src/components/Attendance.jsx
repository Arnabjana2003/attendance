import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import services from '../appwrite/services';
import {useParams} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "./Button"

function Attendance() {

  const {year} = useParams()

  const students = useSelector(state=>state.student[year]);
  const user = useSelector(state=>state.auth)
  const [list,setList] = useState([]);
  console.log(user.authData);

  const onCng = (event)=>{
    if(event.checked){
      setList([...list,event.value])
    }else{
      const ele = list.filter(l=>l!=event.value)
      setList(ele)
    }
  }

  const handleSubmit = ()=>{
    if(list.length !== 0){
      const lists = list.toString();
    services.attendance(import.meta.env.VITE_APPWRITE_FIRSTYEAR_PRESENTS_COLLECTION_ID,
      lists)
    .then(()=>{
      toast("Attendance submitted successfull")
    })
    .catch((err)=>{
      toast(err.message)
    })
    }else{
      toast("No Student Found")
    }
 
  }

    return (
        <div className=''>
        <ToastContainer/>
        <ul role="list" className=" p-3 divide-y divide-red-200">
          {students && students.map((student) => (
            <li key={student.roll} className="flex justify-evenly gap-x-6 py-5">
              <div className=' md:flex justify-between w-1/3'>
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{student.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">Mrc</p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{student.roll}</p>
              </div>
              </div>
              <div className=" flex items-center">
                <label htmlFor={`present ${student.roll}`} className='mr-3'>Present</label>
                <input type='checkBox' id={`present ${student.roll}`} value={student.roll} onChange={(e)=>onCng(e.target)}/>
              </div>
            </li>
          ))}
        </ul>
        <div className=' text-center'>
          <Button label={"Submit attendance"} onClick={handleSubmit}/>
        </div>
        </div>
      )
}

export default Attendance