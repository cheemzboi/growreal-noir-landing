
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 md:p-16 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-5"></div>
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
              Ready to Start Your Real Estate Journey?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Join thousands of investors who are building wealth with GrowReal's fractional property investments.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M9 18V5l12-2v13"></path>
                  <circle cx="6" cy="18" r="3"></circle>
                  <circle cx="18" cy="16" r="3"></circle>
                </svg>
                App Store
              </Button>
              <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Google Play
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
