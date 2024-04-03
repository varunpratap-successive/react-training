//Question19
// Build a custom hook named useTimer for creating countdown timers.
// Create a useTimer hook that takes a countdown duration as a parameter.
// Use setInterval to decrement the timer at regular intervals.
// Return the current timer value and methods to start, pause, and reset the timer.
// Develop a component that utilizes the useTimer hook to display and control a countdown.

import React, { useState } from "react";
import useTimer from "./useTimer";

const CountdownTimer = () => {
  const [initialDuration, setInitialDuration] = useState(0);
  const {
    duration,
    isRunning,
    startTimer,
    pauseTimer,
    resetTimer,
    setDuration,
  } = useTimer(initialDuration);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  const setInitials = (e) => {
    setDuration(e.target.value);
    setInitialDuration(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="enter time in seconds"
        value={initialDuration}
        onChange={setInitials}
      />
      <h2>Countdown Timer</h2>
      <p>Time remaining: {formatTime(duration)}</p>
      <button onClick={startTimer} disabled={isRunning}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning}>
        Pause
      </button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
};

export default CountdownTimer;
