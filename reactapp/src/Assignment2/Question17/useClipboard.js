
import { useState } from 'react';

const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = (text) => {
    try {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setIsCopied(true);
    } catch (error) {
      console.error('Failed to copy to clipboard:', error);
      setIsCopied(false);
    }
  };

  return { isCopied, copyToClipboard };
};

export default useClipboard;
