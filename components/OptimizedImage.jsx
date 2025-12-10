'use client';

import React, { useState, useEffect } from 'react';
import { getOptimizedImagePath } from '@/utils/imageHelper';

/**
 * OptimizedImage component that serves WebP for iOS/Safari and SVG for other devices
 * @param {string} src - Path to the SVG image (e.g., '/img/logo.svg')
 * @param {string} alt - Alt text for the image
 * @param {string} className - CSS classes
 * @param {object} style - Inline styles
 * @param {object} props - Other img tag props
 */
const OptimizedImage = ({ src, alt, className = '', style = {}, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);

  useEffect(() => {
    // Set the optimized image path on client-side
    setImageSrc(getOptimizedImagePath(src));
  }, [src]);

  // Default styles for crisp rendering
  // Merge transforms if both default and custom style have transform
  const defaultTransform = 'translateZ(0)';
  const customTransform = style.transform || '';
  const mergedTransform = customTransform 
    ? `${defaultTransform} ${customTransform}`.trim()
    : defaultTransform;

  // Extract transform from style to avoid duplication
  const { transform, ...restStyle } = style;

  const defaultStyle = {
    imageRendering: '-webkit-optimize-contrast',
    WebkitBackfaceVisibility: 'hidden',
    backfaceVisibility: 'hidden',
    ...restStyle,
    // Apply merged transform last to ensure it's not overridden
    transform: mergedTransform,
  };

  return (
    <img
      src={imageSrc}
      alt={alt}
      className={className}
      style={defaultStyle}
      {...props}
    />
  );
};

export default OptimizedImage;

