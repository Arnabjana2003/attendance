import React from 'react'
import Header from '../components/Header'
import Attendance from '../components/attendance'

function AttendancePage() {
  return (
    <div className=' min-h-screen bg-gradient-to-tl from-slate-200 to-slate-400 text-black'>
        <Header/>
        <Attendance/>
    </div>
  )
}

export default AttendancePage