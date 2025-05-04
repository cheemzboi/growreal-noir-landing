
import React from 'react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-4 md:px-8 border-b border-border fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/753dc212-1e5a-4712-bf2c-03ba962eb5f5.png" 
            alt="GrowHill Logo" 
            className="h-8 mr-2"
          />
          <h1 className="text-xl md:text-2xl font-display font-bold">
            Grow<span className="font-black">Hill</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            How It Works
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Benefits
          </a>
          <a href="#reviews" className="text-sm font-medium hover:text-muted-foreground transition-colors">
            Reviews
          </a>
        </nav>
        
        <Button variant="outline" className="hidden md:flex">
          Download App
        </Button>
        
        <Button variant="ghost" className="md:hidden" size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
