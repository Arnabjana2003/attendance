import React from 'react'
import Header from '../components/Header'
import ViewAttendance from '../components/ViewAttendance'

function ViewAttendancePage() {
  return (
    <div className=' min-h-screen bg-gradient-to-tl from-slate-200 to-slate-400 text-black'>
        <Header/>
        <ViewAttendance/>
    </div>
  )
}

export default ViewAttendancePage