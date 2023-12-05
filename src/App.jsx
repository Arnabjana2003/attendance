import React, { useEffect, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import {useDispatch} from 'react-redux'
import authService from "./appwrite/authService"
import services from "./appwrite/services"
import { login,logout } from '../redux/authSlice'
import {firYr,secYr,thrdYr,frthYr} from '../redux/studentSlice'
import Header from './components/Header'

function App() {
  console.log("App is running");
  const dispatch = useDispatch();
  const [dataUpdate,setDataUpdate] = useState(false)

  const getDetails = ()=>{
    authService.getCurrentUSer()
    .then(res=>{
      dispatch(login(res));
    })
    .catch(()=>{
      dispatch(logout());
    })
    .finally(()=>setDataUpdate(true))

    services.getStudents(String(import.meta.env.VITE_APPWRITE_FIRSTYEAR_STUDENTS_COLLECTION_ID))
    .then(data=>{
      dispatch(firYr(data.documents));
    })
    .catch(err=>console.log(err))

    services.getStudents(String(import.meta.env.VITE_APPWRITE_SECONDYEAR_STUDENTS_COLLECTION_ID))
    .then(data=>{
      dispatch(secYr(data.documents));
    })
    .catch(err=>console.log(err))

    services.getStudents(String(import.meta.env.VITE_APPWRITE_THIRDYEAR_STUDENTS_COLLECTION_ID))
    .then(data=>{
      dispatch(thrdYr(data.documents));
    })
    .catch(err=>console.log(err))

    services.getStudents(String(import.meta.env.VITE_APPWRITE_FOURTHYEAR_STUDENTS_COLLECTION_ID))
    .then(data=>{
      dispatch(frthYr(data.documents));
    })
    .catch(err=>console.log(err))
  }
  useEffect(getDetails,[]);
  return (
    <div className=' w-full min-h-screen bg-gradient-to-tl to-blue-900 from-blue-500 text-white'>
      {dataUpdate?<Outlet/>:"Loading..."}
    </div>
  )
}

export default App