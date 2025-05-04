
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <img 
                src="/lovable-uploads/753dc212-1e5a-4712-bf2c-03ba962eb5f5.png" 
                alt="GrowHill Logo" 
                className="h-10 mr-2"
              />
              <h2 className="text-xl font-display font-bold">
                Grow<span className="font-black">Hill</span>
              </h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Making real estate investment accessible, transparent, and profitable for everyone.
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-border flex justify-center">
          <p className="text-muted-foreground text-sm">
            © 2025 GrowHill. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
