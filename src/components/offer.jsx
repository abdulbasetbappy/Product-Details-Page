import React, { useEffect, useState } from 'react';

function Offer() {
  // Step 1: Define the initial time object (15 hours, 145 minutes, 20 seconds)
  const initialTime = {
    hours: 15,
    minutes: 145,
    seconds: 20,
  };

  // Step 2: State to store the remaining time
  const [time, setTime] = useState(() => {
    // Check if time is in localStorage, otherwise use initial time
    const savedTime = localStorage.getItem('offerTime');
    return savedTime ? JSON.parse(savedTime) : initialTime;
  });

  useEffect(() => {
    // Step 3: Save the initial time to localStorage if it's not already there
    if (!localStorage.getItem('offerTime')) {
      localStorage.setItem('offerTime', JSON.stringify(initialTime));
    }

    // Step 4: Start a timer that counts down every second
    const countdown = setInterval(() => {
      setTime((prevTime) => {
        const { hours, minutes, seconds } = prevTime;

        // Calculate the next state of the timer
        let newSeconds = seconds - 1;
        let newMinutes = minutes;
        let newHours = hours;

        if (newSeconds < 0) {
          newMinutes -= 1;
          newSeconds = 59;
        }

        if (newMinutes < 0) {
          newHours -= 1;
          newMinutes = 59;
        }

        if (newHours < 0) {
          clearInterval(countdown); // Stop the timer if the countdown reaches 0
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        const newTime = {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };

        // Save the updated time to localStorage
        localStorage.setItem('offerTime', JSON.stringify(newTime));

        return newTime;
      });
    }, 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(countdown);
  }, []);

  // Format the time as 2-digit (for example: 09:05:09)
  const formatTime = (time) => String(time).padStart(2, '0');

  return (
    <div className="offer-banner bg-gray-950 text-white py-2 text-center">
      <h2 className="text-xs md:text-base">Get 25% off in this summer sale. Grab it Fast !! 
        <span className="ml-2 font-bold">
        {formatTime(time.hours)}H:{formatTime(time.minutes)}M:{formatTime(time.seconds)}S
        </span>
      </h2>
    </div>
  );
}

export default Offer;
