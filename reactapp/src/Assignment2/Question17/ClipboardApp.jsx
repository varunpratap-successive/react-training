//Question17
// Build a custom hook named useClipboard for copying text to the clipboard.
// Implement a useClipboard hook that takes a text value as a parameter.
// Use the document.execCommand API to copy the provided text to the clipboard.
// Return a success status and methods to trigger the copying action.
// Develop a component that uses the useClipboard hook to provide a copy button for text.

import React from "react";
import CopyMethod from "./CopyMethod";

const ClipboardApp = () => {
  return (
    <div>
      <h3>Copy Text to Clipboard</h3>
      <CopyMethod initialText="Varun" />
    </div>
  );
};

export default ClipboardApp;
