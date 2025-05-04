
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="rounded-full bg-wellness-primary p-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="M8 11h8" />
                <path d="M12 15V7" />
              </svg>
            </div>
            <span className="text-xl font-bold font-display bg-clip-text text-transparent bg-gradient-to-r from-wellness-primary to-wellness-secondary">LifeSync</span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-wellness-primary transition-colors">Home</Link>
          <Link to="/features" className="text-sm font-medium hover:text-wellness-primary transition-colors">Features</Link>
          <Link to="/about" className="text-sm font-medium hover:text-wellness-primary transition-colors">About</Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-wellness-primary transition-colors">Dashboard</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Log In</Button>
          </Link>
          <Link to="/signup">
            <Button className="bg-wellness-primary hover:bg-wellness-primary/90" size="sm">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t py-4">
          <div className="container flex flex-col gap-4">
            <Link to="/" className="px-2 py-1 hover:bg-muted rounded-md" onClick={toggleMenu}>Home</Link>
            <Link to="/features" className="px-2 py-1 hover:bg-muted rounded-md" onClick={toggleMenu}>Features</Link>
            <Link to="/about" className="px-2 py-1 hover:bg-muted rounded-md" onClick={toggleMenu}>About</Link>
            <Link to="/dashboard" className="px-2 py-1 hover:bg-muted rounded-md" onClick={toggleMenu}>Dashboard</Link>
            <div className="flex flex-col gap-2 pt-2 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/signup" onClick={toggleMenu}>
                <Button className="bg-wellness-primary hover:bg-wellness-primary/90 w-full">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
