import React, { useState } from 'react';
import { Search, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const InputBar: React.FC = () => {
  const [url, setUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    // Validate if it's an Amazon or Flipkart URL
    const isValidUrl = url.includes('amazon.') || url.includes('flipkart.') || url.includes('amzn.');
    
    if (!isValidUrl) {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid Amazon or Flipkart product URL",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    try {
      // Here you would make the actual API call to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Success!",
        description: "Price tracking started for this product",
      });
      
      setUrl('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to start price tracking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-white rounded-full shadow-lg border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 focus-within:border-purple-500 focus-within:shadow-xl">
          <div className="pl-6 pr-4">
            <Search className="w-6 h-6 text-gray-400" />
          </div>
          
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste your Amazon or Flipkart product link here..."
            className="flex-1 border-none bg-transparent text-lg py-6 px-0 focus:ring-0 focus:outline-none placeholder:text-gray-400"
            disabled={isLoading}
          />
          
          <Button
            type="submit"
            disabled={!url.trim() || isLoading}
            className="btn-gradient text-white px-8 py-3 m-2 rounded-full font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Tracking...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Track Price</span>
              </>
            )}
          </Button>
        </div>
      </form>
      
      <div className="text-center mt-6">
        <p className="text-gray-600 text-sm">
          Supported platforms: Amazon, Flipkart • Free price alerts via email
        </p>
      </div>
    </div>
  );
};

export default InputBar;