import React, { Suspense, lazy, ReactNode } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
}

/**
 * Wrapper component pour lazy-load des sections au scroll
 * Utilise Intersection Observer API pour détecter quand la section entre dans le viewport
 * Réduit le JS initial et améliore LCP
 */
export const LazySection: React.FC<LazySectionProps> = ({
  children,
  fallback,
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [threshold]);

  return (
    <div ref={ref}>
      {isVisible ? (
        <Suspense fallback={fallback || <SectionSkeleton />}>
          {children}
        </Suspense>
      ) : (
        fallback || <SectionSkeleton />
      )}
    </div>
  );
};

/**
 * Skeleton loader pour les sections
 */
const SectionSkeleton = () => (
  <div className="py-20 md:py-28 space-y-6">
    <Skeleton className="h-10 w-32 mx-auto" />
    <Skeleton className="h-20 w-3/4 mx-auto" />
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[1, 2, 3].map((i) => (
        <Skeleton key={i} className="h-48" />
      ))}
    </div>
  </div>
);

/**
 * Helper pour créer des composants lazy-loaded
 */
export function lazyLoad<P extends object>(
  importFunc: () => Promise<{ default: React.ComponentType<P> }>,
  componentName: string
) {
  return lazy(importFunc);
}

export default LazySection;
