import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">Based on verified reviews</span>
          </div>
        </div>

        {/* Testimonials will be added here */}
        <div className="bg-white rounded-2xl p-8 md:p-12 text-center shadow-sm">
          <p className="text-gray-600 text-lg mb-4">
            "Working with Sargas was an exceptional experience. They delivered our project on time and exceeded our expectations with their AI-powered solutions."
          </p>
          <div className="font-semibold text-gray-900">John Smith</div>
          <div className="text-gray-600 text-sm">CEO, Tech Startup</div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;