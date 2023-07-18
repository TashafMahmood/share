import React from 'react';

const App = () => {
  const handleClick = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My App',
          text: 'Check out this amazing app!',
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
      <button onClick={handleClick}>Share</button>
    </div>
  );
};

export default App;