"use client";

import { useState, useEffect } from "react";
import { isMobileDevice, copyToClipboard } from "../utils/device";

interface CopyButtonProps {
  text: string;
}

export function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if the device is mobile on component mount
    setIsMobile(isMobileDevice());
    
    // Add resize listener to update mobile status
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleCopy = async () => {
    setError(null);
    
    try {
      const success = await copyToClipboard(text);
      
      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        throw new Error("Copy operation failed");
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
      
      // Show different message based on device type
      if (isMobile) {
        setError("Tap to select");
      } else {
        setError("Copy failed");
      }
      
      // Create a temporary element for user to manually copy
      const tempDisplay = document.createElement("div");
      tempDisplay.style.position = "fixed";
      tempDisplay.style.top = "50%";
      tempDisplay.style.left = "50%";
      tempDisplay.style.transform = "translate(-50%, -50%)";
      tempDisplay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      tempDisplay.style.color = "white";
      tempDisplay.style.padding = "20px";
      tempDisplay.style.borderRadius = "10px";
      tempDisplay.style.zIndex = "9999";
      tempDisplay.style.maxWidth = "80%";
      tempDisplay.style.textAlign = "center";
      
      if (isMobile) {
        tempDisplay.innerText = "Select the text manually and use your device's copy function";
      } else {
        tempDisplay.innerText = "Please use Ctrl+C or right-click to copy";
      }
      
      document.body.appendChild(tempDisplay);
      setTimeout(() => {
        document.body.removeChild(tempDisplay);
        setError(null);
      }, 3000);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`rounded-md transition-all duration-300 flex items-center justify-center ${
        copied 
          ? "text-green-500" 
          : error 
            ? "text-yellow-400 hover:text-yellow-300" 
            : "text-blue-400 hover:text-blue-300"
      } px-1.5 py-0.5 bg-transparent`}
      aria-label={copied ? "Copied to clipboard" : error ? error : "Copy to clipboard"}
    >
      {copied ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-4 h-4 animate-fadeIn"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      ) : error ? (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={1.5} 
          stroke="currentColor" 
          className="w-4 h-4"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" 
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
          />
        </svg>
      )}
    </button>
  );
} 