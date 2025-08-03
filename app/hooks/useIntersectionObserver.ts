import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px'
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = ref.current; // Copy ref to variable to avoid stale closure

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) { // Use the copied variable in cleanup
        observer.unobserve(element);
      }
    };
  }, [threshold, rootMargin]);

  return [ref, isIntersecting] as const;
};
