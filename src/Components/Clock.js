import React, { useState, useEffect } from 'react';

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update the current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const formattedTime = currentTime.toLocaleTimeString();

  return (
    <div style={{backgroundColor:'white',borderRadius:"15px",padding:"10px"}}>
      <h1>{formattedTime}</h1>
    </div>
  );
};

export default Clock;
