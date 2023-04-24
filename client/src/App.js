import React from 'react'
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom'
import Landing from './components/Landing'
import SignUp from './components/SignUp'
import UserLogin from './components/UserLogin'
import AdminLogin from './components/AdminLogin'
import Dashboard from './components/Dashboard'
import AdminPanel from './components/AdminPanel'
import AdminSignup from './components/AdminSignup'
import useAuth from "./useAuth"

// function PrivateRoutes() {
//   return (
//     <Routes>
//       <Route index element={<Dashboard />} />
//       <Route path="/admin" element={<AdminPanel />} />
//       <Route path="/search" element={<Search />} />
//       <Route path="/favorites" element={<Favorites />} />
//     </Routes>
//   );
// }


function auth() {
  if(sessionStorage.getItem("token"))
   return true
  else 
   return false
}
function adminAuth() {
  if(sessionStorage.getItem("admin"))
   return true
  else 
   return false
}

const App = () => {
  let isAuthenticated=useAuth()
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Landing />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/adminlogin" element={<AdminLogin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/adminsignup" element={<AdminSignup/>} />
        {/* <Route path="/dashboard/*" element={isAuthenticated ? <Dashboard /> : <Navigate to="/login" />} /> */}
        <Route
            path="/dashboard"
            element={
              (isAuthenticated=auth()) ? (
                <>
                  <Dashboard />
                  <Outlet />
                </>
              ) : (
                <Navigate to="/userlogin" />
              )
            }
          />
        <Route
            path="/admin"
            element={
              isAuthenticated=adminAuth() ? (
                <>
                  <AdminPanel />
                  <Outlet />
                </>
              ) : (
                <Navigate to="/adminlogin" />
              )
            }
          />
        {/* <Route path="/adminpanel/*" element={isAuthenticated ? <AdminPanel /> : <Navigate to="/login"/>} /> */}
        
      </Routes>
    </BrowserRouter>
  )
}

export default App