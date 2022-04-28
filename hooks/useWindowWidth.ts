import React, { useState, useEffect } from 'react';

const useWindowWidth = () => {
  const [windowWidth, setWindowSize] = useState<number | undefined>(undefined);

  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      const changeWindowWidth = () => {
        // Set window width/height to state
        setWindowSize(window.innerWidth);
      };

      // Add event listener
      window.addEventListener('resize', changeWindowWidth);

      // Call handler right away so state gets updated with initial window size
      changeWindowWidth();

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', changeWindowWidth);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowWidth;
};

export default useWindowWidth;
