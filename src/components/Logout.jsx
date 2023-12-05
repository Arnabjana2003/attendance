import React from 'react'
import authSevice from '../appwrite/authService'
import { logout } from '../../redux/authSlice'

function Logout({className}) {
    const logOut = ()=>{
        authSevice.logout().then(()=>{
            dispatch(logout())
            toast("Logout Successful")
        }).catch((err)=>toast(err.message))
    }
  return (
    <div>
        <button className={className} onClick={logOut}>Logout</button>
    </div>
  )
}

export default Logout