import { useRef, useEffect } from 'react';

/**
 * Executes the function passed as a parameter when the element
 * that receives the ref key in the props ref appears on the screen.
 *
 * @param onVisible - Callback to be called when the element is visible.
 * Important to remember to pass the function without executing it.
 *
 * @returns [ref, root] -
 * ref is the ref of the element, root is the root element. root usage is optional.
 */
function useIsVisible(onVisible: Function) {
  const ref = useRef<HTMLDivElement>(null);
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current) {
      const config = {
        root: root.current,
        rootMargin: '0px',
        threshold: 0.5,
      };
      observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          onVisible();
          observer.disconnect();
        }
      }, config);
      observer.observe(ref.current as Element);
    }
    return () => observer && observer.disconnect();
  }, [onVisible]);
  return [ref, root];
}

export default useIsVisible;
