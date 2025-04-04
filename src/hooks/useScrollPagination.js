import { useRef, useEffect, useCallback } from "react";

export default function useScrollPagination(parentRef, childRef, callback) {
  const observer = useRef();

  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const options = {
      root: parentRef.current,
      rootMargin: "0px",
      threshold: 0,
    };

    observer.current = new IntersectionObserver(([target]) => {
      if (target.isIntersecting) {
        memoizedCallback();
      }
    }, options);

    if (childRef.current) {
      observer.current.observe(childRef.current);
    }

    return function () {
      if (childRef.current) {
        observer.current.unobserve(childRef.current);
      }
    };
  }, [memoizedCallback, parentRef, childRef]);
}
