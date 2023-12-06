import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AddMemberPage from './pages/AddMemberPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import StudentsLists from './components/StudentsLists.jsx'
import AttendancePage from './pages/AttendancePage.jsx'
import ViewAttendancePage from './pages/ViewAttendancePage.jsx'
import Protector from './components/Protector.jsx'
import { Provider } from 'react-redux'
import store from '../redux/store.js'
import Dashboard from './pages/Dashboard.jsx'
import YearOptions from './components/YearOptions.jsx'
import Home from './pages/Home.jsx'
import AddStudentPage from './pages/AddStudentPage.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Protector authentication={false}><Home/></Protector>
      },
      {
        path: "/add-member",
        element: <Protector><AddMemberPage/></Protector>
      },
      {
        path: "/:year/add-student",
        element: <Protector><AddStudentPage/></Protector>
      },
      {
        path:"/login",
        element: <Protector authentication={false}><LoginPage/></Protector>
      },
      {
        path:"/students",
        element: <Protector><StudentsLists/></Protector>
      },
      {
        path:"/options",
        element: <Protector><YearOptions/></Protector>
      },
      {
        path:"/dashboard",
        element: <Protector><Dashboard/></Protector>
      },
      {
        path:"/:year/attendance",
        element: <Protector><AttendancePage/></Protector>
      },
      {
        path:"/:year/view-attendance",
        element: <ViewAttendancePage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
