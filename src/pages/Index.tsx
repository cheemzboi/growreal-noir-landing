
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <div className="py-12 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-8">Experience the GrowHill App</h2>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="w-full md:w-1/4 p-4">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <AspectRatio ratio={9/16}>
                    <img 
                      src="/lovable-uploads/60bdf1cf-f8d8-4451-bee3-3556d3042d2e.png"
                      alt="GrowHill Home" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="mt-4 font-medium">Get Started</p>
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <AspectRatio ratio={9/16}>
                    <img 
                      src="/lovable-uploads/e3137c6e-9cbe-4474-a7ab-94bf75a14a33.png"
                      alt="GrowHill Investment Marketplace" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="mt-4 font-medium">Find Properties</p>
              </div>
              <div className="w-full md:w-1/4 p-4">
                <div className="rounded-xl shadow-lg overflow-hidden">
                  <AspectRatio ratio={9/16}>
                    <img 
                      src="/lovable-uploads/9170abfb-95b7-4b47-888a-e099bb1da8c0.png"
                      alt="GrowHill Portfolio" 
                      className="object-cover w-full h-full"
                    />
                  </AspectRatio>
                </div>
                <p className="mt-4 font-medium">Track Performance</p>
              </div>
            </div>
          </div>
        </div>
        <Features />
        <Benefits />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
