import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginLanding from './pages/Login/LoginLanding'
import Login from './pages/Login/Login';
import VerifyOtp from './pages/Login/VerifyOtp';
import MasterDashboard from './pages/Dashboard/MasterDashboard';
import LoginStore from './pages/Login/LoginStore';
import StoreLanding from './pages/Login/StoreLanding';



const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginLanding />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<VerifyOtp />} />
          <Route path="/storeregister" element={<StoreLanding />} />
          <Route path="/storelogin" element={<LoginStore />} />
          <Route path="/Home" element={<MasterDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
