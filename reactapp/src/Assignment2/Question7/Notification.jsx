//Question7
// Create a functional component called Notification.
// Use the useState hook to manage a state variable named message initialized to an empty string.
// Use the useEffect hook to show a notification message for 5 seconds whenever the message state changes.
// Render the notification message in a <div> element.
// After 5 seconds, clear the message to hide the notification.

import React, { useEffect, useState } from "react";
const fiveSeconds = 5000;
function Notification() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setMessage("");
    }, fiveSeconds);

    return () => clearTimeout(timer);
  }, [message]);

  const displaymessage = () => {
    setMessage("Display message for 5 seconds");
  };

  return (
    <div>
      <button onClick={displaymessage}> display </button>
      <p>{message}</p>
    </div>
  );
}

export default Notification;
