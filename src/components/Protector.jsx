import React, { useEffect } from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function Protector({children}) {
  const navigate = useNavigate()
  const authStatus = useSelector(state=>state.auth.status)
  console.log(authStatus);
    useEffect(()=>{
      if(!authStatus){
        navigate("/login")
      }
    },[authStatus])
    
  return (
    <div>{children}</div>
  )
}

export default Protector