import React from 'react';
import { Globe, Phone } from 'lucide-react';

const Services = () => {
  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Explore our services
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Web Development */}
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/images/web-development-illustration.png" 
                alt="Web Development" 
                className="w-64 h-64 mx-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Web Development
            </h3>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <Globe className="w-5 h-5" />
              <span>Frontend • Backend</span>
            </div>
          </div>

          {/* Mobile Development */}
          <div className="text-center">
            <div className="mb-8">
              <img 
                src="/images/mobile-development-illustration.png" 
                alt="Mobile Development" 
                className="w-64 h-64 mx-auto object-contain"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              MOBILE DEVELOPMENT
            </h3>
            <div className="flex items-center justify-center space-x-2 text-gray-600 mb-4">
              <Phone className="w-5 h-5" />
              <span>iOS • Android</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 mt-16 text-center shadow-sm">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Get the same high-quality service for a smaller task
          </h3>
          <button className="btn-primary">
            Start Small Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;