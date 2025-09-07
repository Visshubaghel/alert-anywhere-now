import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 py-4 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Search className="w-4 h-4 text-white" />
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            PriceAlert AI
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
            How it works
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
            Features
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors font-medium">
            Pricing
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="w-5 h-5" />
          </Button>
          
          <Button className="btn-gradient text-white px-6 py-2 rounded-full font-medium">
            Sign In
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;