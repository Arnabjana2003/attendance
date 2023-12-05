import React, { useState } from "react";
import authSevice from "../appwrite/authService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from "./Button";
import Logo from "./Logo";

function AddMember() {
  const [userData,setUserData] = useState({});
  const onCng = (event)=>{
    setUserData({...userData,[event.name]:event.value});
  }
  const handleSubmit = (e)=>{
    e.preventDefault()
    const btn = e.target.btn
      const name = e.target.name
      const email = e.target.email
      const password = e.target.password
      btn.disabled = true
        btn.innerText = "Adding..."
    authSevice.signup(userData.email,userData.email,userData.name)
    .then(()=>{
      toast("Member added");
      name.value = "";
      email.value = "";
      password.value = "";
    })
    .catch(err=>{
      toast(err.message)
    })
    .finally(()=>{
      btn.disabled = false
      btn.innerText = "Add"
    })
  }
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <ToastContainer position="top-center"/>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <div className=' text-center'>
          <Logo span=" font-extrabold text-2xl md:text-3xl text-yellow-300" className=" font-bold text-xl md:text-2xl text-white"/>
          </div>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Add new member
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" method="POST" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Your name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  onChange={(e)=>onCng(e.target)}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  onChange={(e)=>onCng(e.target)}
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Set a Passcode
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="min 8 characters"
                  autoComplete="current-password"
                  minLength={8}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
                  onChange={(e)=>onCng(e.target)}
                />
              </div>
            </div>

            <div>
              {/* <button
              type="submit"
              name="btn"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600
                disabled:bg-indigo-400"
              >
                Add Member
              </button> */}
              <Button type={"submit"} label={"Log in"} className='w-full'/>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddMember;
