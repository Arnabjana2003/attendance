import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import services from "../appwrite/services"
import {useParams} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ViewAttendance() {
  const {year} = useParams();
  const [list,setList] = useState(["bcs/sd","sdf/dg","B.Sc/23/3454"]);

    const students =  useSelector(state=>state.student[`${year}`]);
    useEffect(()=>{
      services.getStudents(import.meta.env[`VITE_APPWRITE_${year.toUpperCase()}_PRESENTS_COLLECTION_ID`])
      .then(data=>{
      if(data.documents.length != 0){
        data.documents.forEach(item=>{
          const ele = item.rollLists.split(",");
          setList([...list,...ele]) 
        })
      }
    })
      .catch(err=>{
        toast(err.message)
      })
    },[])
    

    return (
        <ul role="list" className=" p-3 divide-y divide-red-200">
          <ToastContainer/>
            <li className="md:flex justify-evenly gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">Students</p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm font-semibold leading-6 text-gray-900">Total Attendance</p>
              </div>
            </li>
          {students.map((student) => (
            <li key={student.roll} className="md:flex justify-evenly gap-x-6 py-5">
              <div className="flex min-w-0 gap-x-4">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">{student.name}</p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">{student.roll}</p>
                </div>
              </div>
              <div className=" shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">{list.filter(item=>item==student.roll).length}</p>
              </div>
            </li>
          ))}
        </ul>
      )
}

export default ViewAttendance