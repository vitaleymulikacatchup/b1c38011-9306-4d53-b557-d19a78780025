import React from 'react';
import { Star } from 'lucide-react';

const Team = () => {
  return (
    <section className="bg-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sargas Team
          </h2>
          <div className="flex items-center justify-center space-x-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-gray-600">Experienced professionals</span>
          </div>
        </div>

        {/* Team content placeholder */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center">
          <p className="text-gray-600 text-lg mb-4">
            Our team consists of experienced developers, designers, and AI specialists who are passionate about creating innovative solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Team;