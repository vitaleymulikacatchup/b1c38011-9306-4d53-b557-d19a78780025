import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const techTags = [
    { name: '#mysql', color: 'bg-blue-100 text-blue-800' },
    { name: '#mongodb', color: 'bg-green-100 text-green-800' },
    { name: '#nginx', color: 'bg-green-100 text-green-800' },
    { name: '#redis', color: 'bg-red-100 text-red-800' },
    { name: '#typescript', color: 'bg-blue-100 text-blue-800' },
    { name: '#javascript', color: 'bg-yellow-100 text-yellow-800' }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white section-padding overflow-hidden">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-brand-blue">AI-powered</span>
                <br />
                <span className="text-gray-900">web and mobile</span>
                <br />
                <span className="text-brand-blue">in 12 weeks</span>
              </h1>
              
              <div className="flex items-center space-x-2 text-gray-600">
                <span>Powered by</span>
                <div className="flex items-center space-x-1">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                  </div>
                  <span className="font-semibold">n8n</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center space-x-2">
                <span>Start Discovery</span>
              </button>
              <button className="btn-secondary flex items-center space-x-2">
                <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
                  <ArrowRight className="w-3 h-3 text-gray-900" />
                </div>
                <span>Portfolio Showcase</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-sm text-gray-600">Follow us on:</span>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm hover:bg-blue-700 transition-colors">
                  f
                </a>
                <a href="#" className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center text-white text-sm hover:bg-gray-800 transition-colors">
                  in
                </a>
                <a href="#" className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm hover:bg-green-600 transition-colors">
                  W
                </a>
              </div>
            </div>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 pt-4">
              {techTags.map((tag, index) => (
                <span key={index} className={`tech-tag ${tag.color}`}>
                  {tag.name}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - 3D Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="floating-element">
                <img 
                  src="/images/3d-abstract.png" 
                  alt="3D Abstract Design" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;