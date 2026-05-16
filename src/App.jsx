import { Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Profile from './pages/dashboard/Profile'
import Settings from './pages/dashboard/Settings'
import Users from './pages/dashboard/Users'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'

function App() {

  return (
    <>
    <Routes>

      <Route path="/" element={<Navigate to="/dashboard" />}/>
      
      <Route path="/dashboard" element={<DashboardLayout/>}>

      <Route index element={<DashboardHome/>} />

      <Route path="profile" element={<Profile/>} />
      <Route path="settings" element={<Settings/>} />
      <Route path="users" element={<Users/>} />

      </Route>
    </Routes>
    </>
  )
}

export default App
