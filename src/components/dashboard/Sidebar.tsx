
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
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
  Bell,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

interface SidebarProps {
  className?: string;
}

const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-background h-screen transition-all duration-300",
        collapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex h-16 items-center justify-between border-b px-4">
        <Link to="/" className={cn("flex items-center gap-2", collapsed && "justify-center w-full")}>
          <div className="rounded-full bg-wellness-primary p-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              <path d="M8 11h8" />
              <path d="M12 15V7" />
            </svg>
          </div>
          {!collapsed && (
            <span className="text-xl font-bold font-display">LifeSync</span>
          )}
        </Link>
        <Button 
          variant="ghost" 
          size="icon" 
          className="hidden md:flex" 
          onClick={toggleSidebar}
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </Button>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid gap-1 px-2">
          <Link
            to="/dashboard"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Home className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Dashboard</span>}
          </Link>
          <Link
            to="/dashboard/diet"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Activity className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Diet Plans</span>}
          </Link>
          <Link
            to="/dashboard/sleep"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Clock className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Sleep Tracking</span>}
          </Link>
          <Link
            to="/dashboard/fitness"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Heart className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Fitness</span>}
          </Link>
          <Link
            to="/dashboard/study"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <BookOpen className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Study</span>}
          </Link>
          <Link
            to="/dashboard/water"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Droplet className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Water Reminder</span>}
          </Link>
          <Link
            to="/dashboard/habits"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Trash2 className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Break Habits</span>}
          </Link>
          <Link
            to="/dashboard/analytics"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <BarChart className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Analytics</span>}
          </Link>
          <Link
            to="/dashboard/social"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Users className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Community</span>}
          </Link>
        </nav>
      </div>
      <div className="border-t p-4">
        <div className="grid gap-2">
          <Link
            to="/dashboard/settings"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <Settings className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Settings</span>}
          </Link>
          <Link
            to="/login"
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:bg-muted hover:text-foreground",
              collapsed ? "justify-center" : ""
            )}
          >
            <LogOut className={cn("h-5 w-5", collapsed ? "mx-auto" : "")} />
            {!collapsed && <span>Logout</span>}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
