import React, { useState, useEffect } from "react";

const TimeDisplay: React.FC = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = String(now.getHours());
      const minutes = String(now.getMinutes()).padStart(2, "0");
      setCurrentTime(`${hours}h ${minutes}m`);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <p className="text-xl font-bold">{currentTime}</p>;
};

export default TimeDisplay;
