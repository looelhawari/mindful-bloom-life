
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Automatically redirect users to the dashboard
    navigate('/dashboard');
  }, [navigate]);

  // This component will only display temporarily before redirect
  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-bold">Redirecting to Dashboard...</h1>
        <p className="text-muted-foreground mt-2">Please wait</p>
      </div>
    </div>
  );
};

export default Home;
