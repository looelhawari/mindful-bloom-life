
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import {
  Activity,
  Clock,
  Droplet,
  BookOpen,
  Heart,
  Trash2,
  BarChart,
  Users,
  Settings,
  Home,
  LogOut,
  Menu,
  Bell
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNavbar = () => {
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center gap-4 border-b bg-background px-4 md:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64">
          <div className="flex flex-col h-full">
            <Link to="/" className="flex items-center gap-2 py-4">
              <div className="rounded-full bg-wellness-primary p-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="M8 11h8" />
                  <path d="M12 15V7" />
                </svg>
              </div>
              <span className="text-xl font-bold font-display">LifeSync</span>
            </Link>
            <nav className="grid gap-1 py-4 flex-1">
              <Link
                to="/dashboard"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Home className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
              <Link
                to="/dashboard/diet"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Activity className="h-5 w-5" />
                <span>Diet Plans</span>
              </Link>
              <Link
                to="/dashboard/sleep"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Clock className="h-5 w-5" />
                <span>Sleep Tracking</span>
              </Link>
              <Link
                to="/dashboard/fitness"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Heart className="h-5 w-5" />
                <span>Fitness</span>
              </Link>
              <Link
                to="/dashboard/study"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <BookOpen className="h-5 w-5" />
                <span>Study</span>
              </Link>
              <Link
                to="/dashboard/water"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Droplet className="h-5 w-5" />
                <span>Water Reminder</span>
              </Link>
              <Link
                to="/dashboard/habits"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Trash2 className="h-5 w-5" />
                <span>Break Habits</span>
              </Link>
              <Link
                to="/dashboard/analytics"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <BarChart className="h-5 w-5" />
                <span>Analytics</span>
              </Link>
              <Link
                to="/dashboard/social"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
              >
                <Users className="h-5 w-5" />
                <span>Community</span>
              </Link>
            </nav>
            <div className="border-t">
              <div className="grid gap-1 py-4">
                <Link
                  to="/dashboard/settings"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  <Settings className="h-5 w-5" />
                  <span>Settings</span>
                </Link>
                <Link
                  to="/login"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                >
                  <LogOut className="h-5 w-5" />
                  <span>Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex w-full items-center gap-2">
        <Link to="/dashboard" className="flex items-center gap-2">
          <div className="rounded-full bg-wellness-primary p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M8 11h8" />
              <path d="M12 15V7" />
            </svg>
          </div>
          <span className="font-bold">LifeSync</span>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="rounded-full">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User"
            className="rounded-full"
            width="32"
            height="32"
          />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </header>
  );
};

export default MobileNavbar;
