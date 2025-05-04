
import React from 'react';
import Sidebar from '@/components/dashboard/Sidebar';
import TopBar from '@/components/dashboard/TopBar';
import MobileNavbar from '@/components/dashboard/MobileNavbar';
import DashboardCards from '@/components/dashboard/DashboardCards';
import ActivityOverview from '@/components/dashboard/ActivityOverview';
import HabitTracker from '@/components/dashboard/HabitTracker';
import DailyTasks from '@/components/dashboard/DailyTasks';
import WaterTracker from '@/components/dashboard/WaterTracker';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <MobileNavbar />
        <TopBar />
        <main className="flex-1 p-4 md:p-6">
          <div className="space-y-2 mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Alex! Here's your wellness overview.</p>
          </div>
          
          <DashboardCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2 space-y-4">
              <ActivityOverview />
              <HabitTracker />
            </div>
            <div className="lg:col-span-1 space-y-4">
              <WaterTracker />
              <DailyTasks />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
