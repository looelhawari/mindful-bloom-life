
import React from 'react';
import { Navigate } from 'react-router-dom';

const Index = () => {
  // Directly redirect to dashboard
  return <Navigate to="/dashboard" replace />;
};

export default Index;
