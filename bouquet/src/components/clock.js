import React, { useState, useEffect } from 'react';
import CountdownTracker from './countdownTracker.js';
import './clock.scss';

const getTimeRemaining = (endtime) => {
  const t = Date.parse(endtime) - Date.parse(new Date());
  return {
    Total: t,
    Days: Math.floor(t / (1000 * 60 * 60 * 24)),
    // Uncomment if you need hours, minutes, and seconds
    // Hours: Math.floor((t / (1000 * 60 * 60)) % 24),
    // Minutes: Math.floor((t / 1000 / 60) % 60),
    // Seconds: Math.floor((t / 1000) % 60),
  };
};

function getTime() {
    var t = new Date();
    return {
      'Total': t,
      'Hours': t.getHours() % 12,
      'Minutes': t.getMinutes(),
      'Seconds': t.getSeconds()
    };
  }

const Clock = ({ countdown, onComplete }) => {
  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(countdown));

  useEffect(() => {
    const updateFn = countdown ? getTimeRemaining : getTime;

    const updateClock = () => {
      const t = updateFn(countdown);

      if (t.Total < 0) {
        setTimeRemaining({
          Days: 20,
          // Uncomment if you need hours, minutes, and seconds
          // Hours: 0,
          // Minutes: 0,
          // Seconds: 0,
        });
        if (onComplete) onComplete();
        return;
      }

      setTimeRemaining(t);
      requestAnimationFrame(updateClock);
    };

    const intervalId = setTimeout(updateClock, 500);

    return () => {
      clearTimeout(intervalId);
    };
  }, [countdown, onComplete]);

  return (
    <div className="flip-clock">
      {Object.keys(timeRemaining).map((key) =>
        key !== 'Total' ? (
          <CountdownTracker key={key} label={key} value={timeRemaining[key]} />
        ) : null
      )}
    </div>
  );
};

export default Clock;
