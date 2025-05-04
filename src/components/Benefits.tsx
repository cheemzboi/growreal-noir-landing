
import React from 'react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 text-center">
            Real Estate Investment,<br />
            <span className="font-black">Reimagined</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 text-center">
            Traditional real estate investment is full of barriers. GrowReal breaks them down, making premium property investment accessible to everyone.
          </p>
          
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Lower Financial Barrier</h3>
                <p className="text-muted-foreground">Start with ₹10,000 instead of crores for whole properties</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Diversified Portfolio</h3>
                <p className="text-muted-foreground">Spread investment across multiple properties to reduce risk</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">No Maintenance Hassles</h3>
                <p className="text-muted-foreground">We handle all property management and maintenance</p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Simple Liquidation</h3>
                <p className="text-muted-foreground">Easier to sell your portion compared to traditional property</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
