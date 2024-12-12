import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import LearnMore from './pages/LearnMore';
import Login from './components/admin/Login';
import Dashboard from './components/admin/Dashboard';
import CustomCursor from './components/CustomCursor';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <CustomCursor />
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;