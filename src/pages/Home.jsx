import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import YearOptions from "../components/YearOptions";
import Header from "../components/Header";
import Button from "../components/Button";

function Home() {
  const [option, setOption] = useState(false);
  return (
    <div className=" w-full min-h-screen text-md sm:text-lg lg:text-xl">
      <Header />
      <ToastContainer />

      <div className="w-full flex justify-center items-center mt-10">
        <div className=" w-[80%] flex flex-col items-center font-semibold">
          <p className=" text-lg sm:text-xl">
            The easiest and fastest way to check your total attendance
          </p>
          {/* <button className=' px-2 py-1 m-2 mt-3 text-blue-800 bg-yellow-500 rounded-md shadow-blue-900 shadow-md'
    onClick={()=>setOption("viewattendance")}
    >Cheack Attendance</button> */}
          <Button
            label={"Check Attendance"}
            onClick={() => setOption("viewattendance")}
            className=" mt-3"
          />
          <div className=" flex justify-center w-full">
            <div>
              {option ? (
                <YearOptions
                  display={(val) => setOption(val)}
                  action={option}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
