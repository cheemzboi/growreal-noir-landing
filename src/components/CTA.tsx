
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-5"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
                Ready to Start Your Real Estate Journey?
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-300">
                Join thousands of investors who are building wealth with GrowHill's fractional property investments.
              </p>
              <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-gray-200">
                <Download className="mr-2" />
                Download GrowHill
              </Button>
            </div>
            <div className="flex justify-center space-x-4 mt-8 md:mt-0">
              <div className="w-1/3">
                <img 
                  src="/lovable-uploads/e3137c6e-9cbe-4474-a7ab-94bf75a14a33.png"
                  alt="GrowHill App - Investment Marketplace" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/3">
                <img 
                  src="/lovable-uploads/9170abfb-95b7-4b47-888a-e099bb1da8c0.png"
                  alt="GrowHill App - Portfolio" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div className="w-1/3">
                <img 
                  src="/lovable-uploads/19976bbd-5894-43e7-a9ac-6ee2c08c2001.png"
                  alt="GrowHill App - Account" 
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
