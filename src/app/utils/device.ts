/**
 * Utility functions for device detection and clipboard operations
 */

/**
 * Detects if the current device is a mobile device
 * @returns boolean indicating if the device is mobile
 */
export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  
  // Check for touch support
  const hasTouchSupport = 'ontouchstart' in window || 
    navigator.maxTouchPoints > 0 ||
    (navigator as any).msMaxTouchPoints > 0;
  
  // Check for mobile user agent
  const userAgent = navigator.userAgent.toLowerCase();
  const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini|mobile|tablet/i.test(userAgent);
  
  // Check screen size
  const isSmallScreen = window.innerWidth <= 768;
  
  return (hasTouchSupport && isMobileUA) || (hasTouchSupport && isSmallScreen);
}

/**
 * Attempts to copy text to clipboard with multiple fallback methods
 * @param text The text to copy
 * @returns Promise resolving to boolean indicating success
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    // Modern Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    
    // Fallback for older browsers
    const textArea = document.createElement("textarea");
    textArea.value = text;
    
    // Make the textarea out of viewport
    textArea.style.position = "fixed";
    textArea.style.left = "-999999px";
    textArea.style.top = "-999999px";
    document.body.appendChild(textArea);
    
    // Focus and select the text
    textArea.focus();
    textArea.select();
    
    // Execute the copy command
    const successful = document.execCommand("copy");
    
    // Remove the textarea
    document.body.removeChild(textArea);
    
    return successful;
  } catch (error) {
    console.error("Failed to copy text:", error);
    return false;
  }
} 