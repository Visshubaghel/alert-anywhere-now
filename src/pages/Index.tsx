import React, { useState, useEffect } from 'react';
import SplashScreen from '../components/SplashScreen';
import MainScreen from '../components/MainScreen';

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Start the exit animation after 2.5 seconds
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, 2500);

    // Hide the splash screen completely after the animation finishes
    const hideTimer = setTimeout(() => {
      setShowSplash(false);
    }, 3500); // 2.5s delay + 1s animation

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      {showSplash && <SplashScreen isExiting={isExiting} />}
      {!showSplash && <MainScreen />}
    </>
  );
};

export default Index;
