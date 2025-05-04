
import React from 'react';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useIsMobile } from '@/hooks/use-mobile';

const TopBar = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return null;
  }

  return (
    <header className="flex h-16 items-center gap-4 border-b bg-background px-6">
      <div className="w-full flex-1">
        <form>
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5" />
          <span className="sr-only">Notifications</span>
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-wellness-primary"></span>
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

export default TopBar;
