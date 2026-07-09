import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import Otp from "@/pages/Otp/Otp";
import { MainLayout } from "@/layout";
import Dashboard from "@/pages/Dashboard/Dashboard";
import UnderDevelopment from "@/pages/UnderDevelopment/UnderDevelopment";

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/otp" element={<Otp />} />

      {/* Main App Layout and subroutes */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/orders" element={<UnderDevelopment />} />
        <Route path="/rides" element={<UnderDevelopment />} />
        <Route path="/clients" element={<UnderDevelopment />} />
        <Route path="/drivers" element={<UnderDevelopment />} />
        <Route path="/shift" element={<UnderDevelopment />} />
        <Route path="/livemap" element={<UnderDevelopment />} />
        <Route path="/carclasses" element={<UnderDevelopment />} />
        <Route path="/branches" element={<UnderDevelopment />} />
        <Route path="/moderators" element={<UnderDevelopment />} />
        <Route path="/settings" element={<UnderDevelopment />} />
      </Route>

      {/* Fallback route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default MainRoutes;
