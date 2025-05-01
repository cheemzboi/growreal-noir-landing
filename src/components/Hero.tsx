
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Own Premium <span className="font-black">Real Estate</span> with Just ₹10,000
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Invest in high-value properties, earn 12-15% yearly returns, and build wealth through fractional real estate ownership.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full text-base">
                Download Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base">
                Learn More
              </Button>
            </div>
            <div className="pt-6 flex items-center space-x-6">
              <div>
                <p className="text-3xl md:text-4xl font-bold">12-15%</p>
                <p className="text-sm text-muted-foreground">Annual Returns</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">10K</p>
                <p className="text-sm text-muted-foreground">Minimum Investment</p>
              </div>
              <div className="h-12 w-px bg-border"></div>
              <div>
                <p className="text-3xl md:text-4xl font-bold">5K+</p>
                <p className="text-sm text-muted-foreground">Happy Investors</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-border animate-fade-in">
              <div className="bg-black aspect-[9/16] md:aspect-[3/4] w-full max-w-[300px] mx-auto">
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black flex items-center justify-center text-white">
                  <div className="text-center">
                    <p className="font-display text-xl font-bold mb-2">GrowReal App</p>
                    <p className="text-xs text-gray-400">Screenshot Preview</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 -bottom-4 -left-4 bg-gradient-to-br from-gray-900 to-black rounded-2xl -z-10 opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
