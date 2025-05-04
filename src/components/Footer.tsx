
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="text-center">
            <h2 className="text-xl font-display font-bold mb-4">
              Grow<span className="font-black">Hill</span>
            </h2>
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
