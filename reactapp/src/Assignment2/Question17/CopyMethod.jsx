import React, { useState } from "react";
import useClipboard from "./useClipboard";

const CopyMethod = ({ initialText }) => {
  const [text, setText] = useState(initialText);
  const { isCopied, copyToClipboard } = useClipboard();

  const handleCopyClick = () => {
    copyToClipboard(text);
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to copy"
      />
      <button onClick={handleCopyClick}>
        {isCopied ? "Copied!" : "Copy to Clipboard"}
      </button>
    </div>
  );
};

export default CopyMethod;
