import React from 'react'
import LoginScreen from '../components/login/LoginScreen'
import DashboardRoutes from './DashboardRoutes'
import { Route, Routes, BrowserRouter } from 'react-router-dom'


export const AppRouter = () => {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/*" element={<DashboardRoutes />} />
      </ Routes>
    </BrowserRouter>
  )
}
