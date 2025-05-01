
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

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
            <Button size="lg" className="rounded-full text-base bg-white text-black hover:bg-gray-200">
              <Download className="mr-2" />
              Download GrowReal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
