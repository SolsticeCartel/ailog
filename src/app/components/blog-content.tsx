"use client";

import { CopyButton } from "./copy-button";
import { useRef, useState, useEffect } from "react";
import { isMobileDevice } from "../utils/device";

interface BlogContentProps {
  content: string;
}

export function BlogContent({ content }: BlogContentProps) {
  if (!content) return null;
  
  const contentRef = useRef<HTMLDivElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
    const handleResize = () => {
      setIsMobile(isMobileDevice());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to handle mobile selection for copying
  const handleContentClick = () => {
    if (isMobile) {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 3000);
    }
  };

  // Process content to reduce empty lines
  const processedContent = content
    .split('\n')
    .filter((line, index, arr) => {
      // Keep the line if it's not empty or if it's not followed by another empty line
      return line.trim() !== '' || (index < arr.length - 1 && arr[index + 1].trim() !== '');
    })
    .join('\n');

  return (
    <div className="mb-6 relative">
      {/* Mobile-friendly copy button with better positioning and size */}
      <div className="absolute top-3 right-3 z-10 flex items-center">
        <div className={`mr-2 text-xs text-blue-300 bg-black/70 px-2 py-1 rounded transition-opacity duration-300 ${showTooltip ? 'opacity-100' : 'opacity-0'}`}>
          {isMobile ? 'Tap to copy' : 'Copy content'}
        </div>
        <div className="bg-black/30 backdrop-blur-sm rounded-md border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 flex items-center justify-center h-7">
          <CopyButton text={content} />
        </div>
      </div>
      
      <div 
        ref={contentRef}
        onClick={handleContentClick}
        className="prose prose-lg dark:prose-invert max-w-none pt-6 px-6 pb-6 bg-blue-500/5 backdrop-blur-md rounded-lg border border-blue-500/20 shadow-xl shadow-blue-500/10 transition-all duration-500 hover:border-blue-400/30 [&>*:first-child]:mt-0 [&>*:last-child]:mb-0"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-lg z-[-1]"></div>
        {processedContent.split("\n").map((paragraph, index) => {
          // Check if the paragraph is a heading (starts with # or ##)
          if (paragraph.startsWith("# ")) {
            return (
              <h2 key={index} className="text-2xl font-bold mt-4 mb-2 gradient-text">
                {paragraph.replace("# ", "")}
              </h2>
            );
          } else if (paragraph.startsWith("## ")) {
            return (
              <h3 key={index} className="text-xl font-semibold mt-3 mb-2 text-blue-400">
                {paragraph.replace("## ", "")}
              </h3>
            );
          } else if (paragraph.startsWith("- ")) {
            // Handle bullet points
            return (
              <ul key={index} className="list-disc list-inside my-2 text-lg">
                <li className="text-blue-100">{paragraph.replace("- ", "")}</li>
              </ul>
            );
          } else if (paragraph.match(/^\d+\.\s/)) {
            // Handle numbered lists
            return (
              <ol key={index} className="list-decimal list-inside my-2 text-lg">
                <li className="text-blue-100">{paragraph.replace(/^\d+\.\s/, "")}</li>
              </ol>
            );
          } else if (paragraph.trim() === "") {
            // Only add a small spacer for empty lines
            return <div key={index} className="h-2"></div>;
          } else {
            return <p key={index} className="my-2 text-lg text-opacity-90">{paragraph}</p>;
          }
        })}
      </div>
    </div>
  );
} 