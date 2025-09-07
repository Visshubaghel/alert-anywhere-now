import React from 'react';
import { MessageSquare } from 'lucide-react';
import Navbar from './Navbar';
import TypingAnimation from './TypingAnimation';
import InputBar from './InputBar';
import { Button } from '@/components/ui/button';

const MainScreen: React.FC = () => {
  const handleTelegramRedirect = () => {
    window.open('https://t.me/pricedekhobot', '_blank');
  };

  return (
    <div className="min-h-screen main-gradient">
      <Navbar />
      
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center space-y-12">
          {/* Typing Animation */}
          <div className="animate-fade-in-up">
            <TypingAnimation />
          </div>
          
          {/* Subtitle */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Track prices across Amazon and Flipkart. Get instant alerts when prices drop. 
              Never miss a deal again.
            </p>
          </div>
          
          {/* Input Bar */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <InputBar />
          </div>
          
          {/* Telegram Bot CTA */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto border border-gray-200/50 shadow-lg">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Try our Telegram Bot
              </h3>
              
              <p className="text-gray-600 mb-4 text-sm">
                Get instant price alerts directly on Telegram. Quick, easy, and always connected.
              </p>
              
              <Button
                onClick={handleTelegramRedirect}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors"
              >
                Open Telegram Bot
              </Button>
            </div>
          </div>
        </div>
        
        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          {[
            {
              title: "Real-time Tracking",
              description: "Monitor prices 24/7 across multiple platforms",
              icon: "📊"
            },
            {
              title: "Instant Alerts",
              description: "Get notified the moment prices drop",
              icon: "⚡"
            },
            {
              title: "Price History",
              description: "View detailed price trends and patterns",
              icon: "📈"
            }
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-200/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default MainScreen;