"use client";

import { useState } from "react";

export function ApiDebug() {
  const [showDebug, setShowDebug] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY || "";
  
  // Mask the API key for security
  const maskedKey = apiKey ? 
    apiKey.substring(0, 4) + "..." + apiKey.substring(apiKey.length - 4) : 
    "Not set";

  return (
    <div className="mt-4 text-sm">
      <button 
        onClick={() => setShowDebug(!showDebug)}
        className="text-blue-400 underline"
      >
        {showDebug ? "Hide Debug Info" : "Show Debug Info"}
      </button>
      
      {showDebug && (
        <div className="mt-2 p-4 bg-gray-800 rounded-md">
          <h3 className="font-bold mb-2">API Configuration:</h3>
          <p>API Key Status: {apiKey ? "Set" : "Not set"}</p>
          <p>API Key (masked): {maskedKey}</p>
          <p>Key Length: {apiKey.length} characters</p>
          <p>Environment: {process.env.NODE_ENV}</p>
        </div>
      )}
    </div>
  );
} 