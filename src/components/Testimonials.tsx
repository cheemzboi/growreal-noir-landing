
import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "GrowReal has completely changed my approach to investing. I never thought I could own a piece of premium real estate with my modest savings.",
      name: "Aditya Singh",
      position: "Software Engineer",
      rating: 5,
    },
    {
      quote: "The returns are consistent and the app makes it so easy to track my growing portfolio. I've already recommended it to all my colleagues.",
      name: "Priya Mehta",
      position: "Marketing Manager",
      rating: 5,
    },
    {
      quote: "As a first-time investor, I was hesitant, but GrowReal's transparency and the ability to start small gave me confidence. Now I'm hooked!",
      name: "Rahul Sharma",
      position: "College Professor",
      rating: 4,
    },
  ];

  const renderStars = (count: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        viewBox="0 0 24 24" 
        fill={i < count ? "currentColor" : "none"} 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        className={i < count ? "text-foreground" : "text-muted-foreground"}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    ));
  };

  return (
    <section id="reviews" className="py-16 md:py-24 px-4 md:px-8 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What Our Investors Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied investors who are growing their wealth with GrowReal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-background rounded-xl p-8 shadow-sm border border-border transition-all hover:shadow-md"
            >
              <div className="flex mb-4 text-primary">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="mb-6 text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
                  <span className="text-lg font-semibold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
