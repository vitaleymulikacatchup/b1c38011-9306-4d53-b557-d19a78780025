import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies
          </h2>
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Content */}
            <div className="p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Dios
              </h3>
              <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                A comprehensive digital platform that revolutionizes how businesses manage their operations. Built with cutting-edge technology and AI-powered features.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="text-2xl font-bold mb-1">$2,500</div>
                  <div className="text-blue-200 text-sm">Project Value</div>
                </div>
                <div>
                  <div className="text-2xl font-bold mb-1">12w</div>
                  <div className="text-blue-200 text-sm">Timeline</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Node.js</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">MongoDB</span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">AI/ML</span>
              </div>

              <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center space-x-2">
                <span>View Case Study</span>
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>

            {/* Right Content - Screenshot */}
            <div className="p-8 md:p-12 flex items-center justify-center">
              <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-w-sm w-full">
                <img 
                  src="/images/dios-dashboard.png" 
                  alt="Dios Dashboard" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;