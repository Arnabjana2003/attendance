import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Logout from './Logout'

function Header() {
    const navigate = useNavigate()
    const authStatus = useSelector(state=>state.auth.status)
  return (
    <div>
        <header className=' flex justify-between p-2 bg-slate-200'>
            <h4 onClick={()=>navigate("/")}>MRC</h4>
            <nav className=' flex w-[80%] justify-end'>
                {!authStatus?(
                    <Link to="/login">
                    Teacher's Login
                    </Link>
                ):(<>
                <div className=' mx-2'><Logout/></div>
                <Link to={"/dashboard"}>Dashboard</Link>
                </>)}
            </nav>
        </header>
    </div>
  )
}

export default Header