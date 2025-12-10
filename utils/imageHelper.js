/**
 * Detects if the current device is iOS (iPhone/iPad) or Safari browser
 * @returns {boolean} True if iOS or Safari, false otherwise
 */
export const isIOSOrSafari = () => {
  if (typeof window === 'undefined') {
    return false; // Server-side rendering
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const isIOS = /iphone|ipad|ipod/.test(userAgent);
  const isSafari = /^((?!chrome|android).)*safari/.test(userAgent);
  
  return isIOS || isSafari;
};

/**
 * Returns the appropriate image path based on device
 * For iOS/Safari: returns WebP version
 * For other devices: returns SVG version
 * @param {string} svgPath - Path to the SVG image (e.g., '/img/logo.svg')
 * @returns {string} Path to the appropriate image format
 */
export const getOptimizedImagePath = (svgPath) => {
  if (!svgPath || !svgPath.endsWith('.svg')) {
    return svgPath; // Return as-is if not an SVG
  }

  if (isIOSOrSafari()) {
    // Replace .svg with .webp for iOS/Safari
    return svgPath.replace('.svg', '.webp');
  }

  // Return SVG for other devices
  return svgPath;
};

