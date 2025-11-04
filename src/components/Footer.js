import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Contact */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Sargas</span>
            </div>
            <p className="text-gray-600 mb-4 max-w-md">
              AI-powered web and mobile development solutions delivered in 12 weeks.
            </p>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Feel free to drop us a note:</span>
              <a href="mailto:contact@sargas.io" className="text-brand-blue hover:text-blue-700 font-medium">
                contact@sargas.io
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-600">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Case Studies</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Contacts</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Web Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Mobile Development</a></li>
              <li><a href="#" className="text-gray-600 hover:text-gray-900">Support and Maintenance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © 2024 Sargas. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;