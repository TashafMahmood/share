import React from 'react';
import Button from './Button';

const App = () => {
  const handleClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          url: window.location.href
        });
        console.log('Successfully shared!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      console.warn('Web Share API not supported.');
    }
  };

  return (
    <div>
      <h1>My App</h1>
      <Button onClick={handleClick} text="Share" />
    </div>
  );
};

export default App;
