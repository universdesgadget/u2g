import React, { useState } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  onLoad?: () => void;
  priority?: boolean;
}

/**
 * OptimizedImage component for better performance
 * - Adds explicit dimensions to prevent layout shift
 * - Uses lazy loading by default
 * - Ensures proper alt text for accessibility
 * - Prevents cumulative layout shift (CLS)
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  onLoad,
  priority = false,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  // Ensure alt text is not empty
  if (!alt || alt.trim() === '') {
    console.warn(`Image without alt text: ${src}`);
  }

  const handleLoad = () => {
    setIsLoaded(true);
    onLoad?.();
  };

  const commonProps = {
    src,
    alt,
    className: `${className} transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`,
    onLoad: handleLoad,
  };

  if (width && height) {
    return (
      <img
        {...commonProps}
        width={width}
        height={height}
        loading={priority ? 'eager' : loading}
        decoding="async"
      />
    );
  }

  return <img {...commonProps} loading={priority ? 'eager' : loading} decoding="async" />;
};

export default OptimizedImage;
