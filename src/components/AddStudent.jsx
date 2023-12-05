import React, {useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useParams} from 'react-router-dom'
import services from '../appwrite/services';

function AddStudent() {
    const {year} = useParams()
    const [data,setData] = useState({});
    const onCng = (event)=>{
        setData({...data,[event.name]:event.value});
    }
    const handleSubmit = (e)=>{
      const btn = e.target.btn
      const name = e.target.name
      const roll = e.target.roll 
        e.preventDefault()
        btn.disabled = true
        btn.innerText = "Adding..."
        services.addStudent(import.meta.env[`VITE_APPWRITE_${year.toUpperCase()}_STUDENTS_COLLECTION_ID`],data.name,data.roll)
        .then(()=>{
                toast("Student Added");
                name.value = "";
                roll.value = "";
        })
        .catch(err=>{
            toast(err.message);
        })
        .finally(()=>{
          btn.disabled = false
          btn.innerText = "Add"
        })
    }
    return (
        <>
          <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8 border">
            <ToastContainer position="top-center"/>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-10 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Add new student
              </h2>
            </div>
    
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
                
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Student's name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder='full name'
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"
                      onChange={(e)=>onCng(e.target)}
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="roll"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Students's Roll number
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="roll"
                      name="roll"
                      type="text"
                      placeholder='B.Sc/23/3425'
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3 disabled:bg-indigo-400"
                      onChange={(e)=>onCng(e.target)}
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-indigo-400"
                    name='btn'
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      );
}

export default AddStudent