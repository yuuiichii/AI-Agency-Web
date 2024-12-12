import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Login from '../components/admin/Login';
import Dashboard from '../components/admin/Dashboard';
import { useAuthStore } from '../store/authStore';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  return isAuthenticated ? <>{children}</> : <Navigate to="/admin" />;
};

const AdminRoutes = () => (
  <>
    <Route path="/admin" element={<Login />} />
    <Route
      path="/admin/dashboard"
      element={
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      }
    />
  </>
);

export default AdminRoutes;