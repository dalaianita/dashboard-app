import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'
import Users from './pages/dashboard/Users'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import Login from './pages/auth/Login'
import UserDetails from './pages/dashboard/UserDetails'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Routes>
 
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      
      <Route path="/dashboard" 
        element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
              <DashboardLayout 
                setIsLoggedIn={setIsLoggedIn}/>
          </ProtectedRoute>
        }>

      <Route index element={<DashboardHome/>} />

      <Route path="profile" element={<Profile/>} />
      
      <Route path="settings" element={<Settings/>} />

      <Route path="users" element={<Users/>} />

      <Route path="users/:id" element={<UserDetails /> }/>

      </Route>

    </Routes>
    </>
  )
}

export default App
